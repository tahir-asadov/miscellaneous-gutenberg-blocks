import {
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
} from "@wordpress/block-editor";
import {
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
	__experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
	PanelBody,
	PanelRow,
	TextControl,
	RangeControl,
	CheckboxControl,
	ToggleControl,
	Button,
	Popover,
	Spinner,
	SelectControl,
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
import { useEffect, useState } from "react";

import { lineDotted } from "@wordpress/icons";
import { getFileExtension } from "../libs/global";
/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

export default function Edit({ attributes, setAttributes }) {
	const [options, setOptions] = useState([]);
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
	useEffect(() => {
		if (!hasResolved) return;
		setOptions(
			allCategories.map((category) => {
				return {
					label: category.name,
					value: category.id,
				};
			}),
		);
	}, [allCategories, hasResolved]);

	const onCategorySelect = (categoryId) => {
		const category = allCategories.filter(
			(category) => category.id == categoryId,
		);
		if (category && category.length) {
			setAttributes({
				categoryId: category[0].id,
				categoryName: category[0].name,
				categoryCount: category[0].count,
				categoryUrl: category[0].link,
			});
		}
	};

	const onImageSelect = (media) => {
		if (!media || !media.url) {
			setAttributes({ imageId: 0, imageUrl: "", imageName: "" });
			return;
		}

		setAttributes({
			imageId: media.id,
			imageUrl: media.sizes.full.url,
			imageUrl: media.sizes?.full
				? media.sizes.full.url
				: media.sizes.thumbnail.url,
			imageName: media.title || media.filename, // Use title or filename
		});
	};
	const removeImage = () => {
		setAttributes({ imageId: 0, imageUrl: "", imageName: "" });
	};
	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Settings", "miscellaneous-gutenberg-blocks")}>
					<SelectControl
						__nextHasNoMarginBottom
						__next40pxDefaultSize
						width="100%"
						label={__("Select an option", "miscellaneous-gutenberg-blocks")}
						value={attributes.categoryId}
						options={options}
						onChange={onCategorySelect}
					/>
					<TextControl
						__nextHasNoMarginBottom
						__next40pxDefaultSize
						label={__("Plural post name", "miscellaneous-gutenberg-blocks")}
						value={attributes.postNameSingular}
						onChange={(value) => {
							setAttributes({ postNameSingular: value });
						}}
					/>
					<TextControl
						__nextHasNoMarginBottom
						__next40pxDefaultSize
						label={__("Plural post label", "miscellaneous-gutenberg-blocks")}
						value={attributes.postNamePlural}
						onChange={(value) => {
							setAttributes({ postNamePlural: value });
						}}
					/>
					<ToggleControl
						style={{ marginBottom: "15px" }}
						label={__("Link to Post", "miscellaneous-gutenberg-blocks")}
						__next40pxDefaultSize
						checked={attributes.isLink}
						onChange={(value) => {
							setAttributes({ isLink: value });
						}}
					/>

					<MediaUploadCheck>
						<MediaUpload
							allowedTypes={["image"]}
							multiple={false}
							value={attributes.imageId}
							onSelect={onImageSelect}
							render={({ open }) => (
								<div
									class={`miscellaneous-gutenberg-blocks-media-and-text--left ${
										attributes.imageUrl ? "has-image" : "has-no-image"
									}`}
								>
									{attributes.imageUrl ? (
										<>
											<img
												src={attributes.imageUrl}
												alt={attributes.imageName}
												style={{ width: "100%" }}
											/>
											<div class="miscellaneous-gutenberg-blocks-media-and-text-button-container">
												<Button
													isDestructive
													variant="secondary"
													onClick={removeImage}
												>
													{__("Remove Image", "miscellaneous-gutenberg-blocks")}
												</Button>
											</div>
										</>
									) : (
										<Button variant="primary" onClick={open}>
											{__(
												"Upload or Select Image",
												"miscellaneous-gutenberg-blocks",
											)}
										</Button>
									)}
								</div>
							)}
						/>
					</MediaUploadCheck>
					<PanelRow></PanelRow>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				<div className="wp-block-miscellaneous-gutenberg-blocks-category-card--left">
					<span className="wp-block-miscellaneous-gutenberg-blocks-category-card--image-wrapper">
						{attributes.imageId ? (
							<img
								src={attributes.imageUrl}
								className={`wp-block-miscellaneous-gutenberg-blocks-category-card--type-${getFileExtension(
									attributes.imageUrl,
								)}`}
							/>
						) : null}
					</span>
				</div>
				<div className="wp-block-miscellaneous-gutenberg-blocks-category-card--right">
					<span className="wp-block-miscellaneous-gutenberg-blocks-category-card--name">
						{attributes.categoryName}
					</span>
					<span className="wp-block-miscellaneous-gutenberg-blocks-category-card--count">
						{attributes.categoryCount}{" "}
						{attributes.categoryCount > 1
							? attributes.postNamePlural
							: attributes.postNameSingular}
					</span>
				</div>
				{/* Display a preview in the editor */}
				{/* {categories.length > 0
					? __(
							"Categories selected. See Inspector.",
							"miscellaneous-gutenberg-blocks",
					  )
					: __(
							"Please select categories from the sidebar.",
							"miscellaneous-gutenberg-blocks",
					  )} */}
			</div>
		</>
	);
}
