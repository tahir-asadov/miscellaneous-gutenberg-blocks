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
	Button,
	Popover,
	Spinner,
} from "@wordpress/components";

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

import { lineDotted } from "@wordpress/icons";
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
				<PanelBody title={__("Settings", "miscellaneous-gutenberg-blocks")}>
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
						{__("Open Settings", "miscellaneous-gutenberg-blocks")}
					</Button>{" "}
					<PanelRow>
						<ReactSortable
							list={categories}
							setList={() => {}}
							style={{ width: "100%" }}
						>
							{categories.map((item) => (
								<div
									className="miscellaneous-gutenberg-blocks-list-item"
									key={item.id}
								>
									<span>{item.name}</span>
									<Button size="compact" icon={lineDotted}></Button>
								</div>
							))}
						</ReactSortable>
						{isPopoverVisible && (
							<Popover
								placement="bottom-start"
								onClose={() => setIsPopoverVisible(false)}
							>
								<div style={{ padding: "16px", width: "260px" }}>
									<h4>
										{__("Advanced Options", "miscellaneous-gutenberg-blocks")}
									</h4>
									<TextControl
										label={__("Custom Value", "miscellaneous-gutenberg-blocks")}
										value={attributes.customValue || ""}
										onChange={(val) => setAttributes({ customValue: val })}
									/>
									<Button
										variant="secondary"
										onClick={() => setIsPopoverVisible(false)}
									>
										{__("Close", "miscellaneous-gutenberg-blocks")}
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
					? __(
							"Categories selected. See Inspector.",
							"miscellaneous-gutenberg-blocks",
					  )
					: __(
							"Please select categories from the sidebar.",
							"miscellaneous-gutenberg-blocks",
					  )}
			</div>
		</>
	);
}
