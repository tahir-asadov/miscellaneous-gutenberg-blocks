import { InspectorControls } from "@wordpress/block-editor";
import {
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
	__experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
	PanelBody,
	PanelRow,
	TextControl,
	RangeControl,
	CheckboxControl,
	ListView,
	Button,
	Popover,
	Spinner,
} from "@wordpress/components";
console.log("ListView", ListView);

import { ReactSortable } from "react-sortablejs";
import { useSelect } from "@wordpress/data";
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";
import { useState } from "react";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

export default function Edit({ attributes, setAttributes }) {
	const { categories } = attributes;
	const classNames = [];
	const blockProps = useBlockProps({
		className: classNames.join(" "),
	});

	// 1. Fetch all categories using the core data store.
	const { allCategories, hasResolved } = useSelect((select) => {
		const selectorArgs = ["taxonomy", "category", { per_page: -1 }];
		return {
			allCategories: select("core").getEntityRecords(...selectorArgs),
			hasResolved: select("core").hasFinishedResolution(
				"getEntityRecords",
				selectorArgs,
			),
		};
	}, []);
	// 2. Handle checkbox changes.
	const onCategoryChange = (isChecked, categoryId) => {
		const newSelection = isChecked
			? [...categories, categoryId] // Add ID if checked
			: categories.filter((id) => id !== categoryId); // Remove ID if unchecked
		setAttributes({ categories: newSelection });
	};
	const [isPopoverVisible, setIsPopoverVisible] = useState(false);
	const onSortItems = (oldIndex, newIndex) => {
		const newItems = [...listItems];
		// Remove the item from its old position
		const [movedItem] = newItems.splice(oldIndex, 1);
		// Add the item to its new position
		newItems.splice(newIndex, 0, movedItem);
		setAttributes({ listItems: newItems });
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Category Settings", "my-plugin")}>
					{/* Show a spinner while loading categories */}
					{/* {!hasResolved && <Spinner />} */}
					{/* Display checkboxes once categories are loaded */}
					{/* {hasResolved &&
						allCategories &&
						allCategories.map((category) => (
							<CheckboxControl
								key={category.id}
								label={category.name}
								checked={categories.includes(category.id)}
								onChange={(isChecked) =>
									onCategoryChange(isChecked, category.id)
								}
							/>
						))} */}
					<Button variant="primary" onClick={() => setIsPopoverVisible(true)}>
						{__("Open Settings", "my-plugin")}
					</Button>{" "}
					<PanelRow>
						<ReactSortable list={categories} setList={() => {}}>
							{categories.map((item) => (
								<div key={item.id}>{item.name}</div>
							))}
						</ReactSortable>
						{isPopoverVisible && (
							<Popover
								placement="bottom-start"
								onClose={() => setIsPopoverVisible(false)}
							>
								<div style={{ padding: "16px", width: "260px" }}>
									<h4>{__("Advanced Options", "my-plugin")}</h4>
									<TextControl
										label={__("Custom Value", "my-plugin")}
										value={attributes.customValue || ""}
										onChange={(val) => setAttributes({ customValue: val })}
									/>
									<Button
										variant="secondary"
										onClick={() => setIsPopoverVisible(false)}
									>
										{__("Close", "my-plugin")}
									</Button>
								</div>
							</Popover>
						)}
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				{/* Display a preview in the editor */}
				{categories.length > 0
					? __("Categories selected. See Inspector.", "my-plugin")
					: __("Please select categories from the sidebar.", "my-plugin")}
			</div>
		</>
	);
}
