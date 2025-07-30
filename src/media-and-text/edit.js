import {
	InnerBlocks,
	BlockControls,
	InspectorControls,
} from "@wordpress/block-editor";
import {
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
	__experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
	Button,
	Popover,
	Toolbar,
	ToolbarDropdownMenu,
	ToolbarGroup,
	ToolbarButton,
	Panel,
	PanelBody,
	PanelRow,
	PanelHeader,
	ToggleControl,
	TextControl,
	RangeControl,
} from "@wordpress/components";

import { InspectorLabel } from "../libs/components/inspector-label";
import {
	ArrowRightToLine,
	ArrowLeftToLine,
	ArrowRightLeft,
} from "lucide-react";
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
import {
	useBlockProps,
	MediaUpload,
	MediaUploadCheck,
} from "@wordpress/block-editor";

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

import { useDispatch } from "@wordpress/data";
import {
	row,
	stack,
	keyboardReturn,
	justifyCenter,
	justifyLeft,
	justifyRight,
	justifySpaceBetween,
	justifyStretch,
	alignLeft,
	alignCenter,
	alignRight,
	paragraph,
	formatBold,
	formatItalic,
	link,
} from "@wordpress/icons";
export default function Edit({
	attributes: {
		imageId,
		imageUrl,
		imageName,
		reversed,
		gap,
		tablet_gap,
		mobile_gap,
	},
	setAttributes,
}) {
	const [layout, setLayout] = useState("desktop");
	const { __experimentalSetPreviewDeviceType } = useDispatch("core/edit-post");
	const classNames = [];
	if (reversed) {
		classNames.push("is-reversed");
	}
	// if (attributes.show_search_icon) {
	// 	classNames.push("show-search-icon");
	// }
	// if (attributes.show_category) {
	// 	classNames.push("show-category");
	// }
	const blockProps = useBlockProps({
		className: classNames.join(" "),
		style: {
			gap:
				layout == "desktop"
					? gap
					: layout == "tablet"
					? tablet_gap
					: mobile_gap,
		},
	});
	console.log("blockProps", blockProps);

	const ALLOWED_BLOCKS = ["core/paragraph", "core/heading", "core/image"]; // Example: Only allow paragraph, heading, and image
	const TEMPLATE = [
		["core/heading", { placeholder: "Add a title..." }],
		["core/paragraph", { placeholder: "Add content here..." }],
	];
	const onImageSelect = (media) => {
		if (!media || !media.url) {
			setAttributes({ imageId: 0, imageUrl: "", imageName: "" });
			return;
		}
		setAttributes({
			imageId: media.id,
			imageUrl: media.url,
			imageName: media.title || media.filename, // Use title or filename
		});
	};
	const removeImage = () => {
		setAttributes({ imageId: 0, imageUrl: "", imageName: "" });
	};
	const ArrowRightLeftIcon = (
		<ArrowRightLeft fill="white" className="svg-no-fill" />
	);
	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						label="Reverse"
						icon={ArrowRightLeftIcon}
						isPressed={reversed}
						onClick={() => {
							setAttributes({ reversed: !reversed });
						}}
					/>
				</ToolbarGroup>
			</BlockControls>
			<InspectorControls>
				<PanelBody title="Settings">
					<InspectorLabel
						title="Gap"
						defaultValue={layout}
						onChange={(value) => {
							setLayout(value);
							__experimentalSetPreviewDeviceType(
								value == "desktop"
									? "Desktop"
									: value == "tablet"
									? "Tablet"
									: "Mobile",
							);
						}}
					/>
					{layout == "desktop" ? (
						<RangeControl
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							value={gap}
							label={null}
							onChange={(value) =>
								setAttributes({
									gap: value,
								})
							}
							min={1}
							max={100}
						/>
					) : layout == "tablet" ? (
						<RangeControl
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							value={tablet_gap}
							label={null}
							onChange={(value) =>
								setAttributes({
									tablet_gap: value,
								})
							}
							min={1}
							max={100}
						/>
					) : (
						<RangeControl
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							value={mobile_gap}
							label={null}
							onChange={(value) =>
								setAttributes({
									mobile_gap: value,
								})
							}
							min={1}
							max={100}
						/>
					)}
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				<MediaUploadCheck>
					<MediaUpload
						allowedTypes={["image"]}
						multiple={false}
						value={imageId}
						onSelect={onImageSelect}
						render={({ open }) => (
							<div
								class={`wp-block-miscellaneous-gutenberg-blocks-and-text--left ${
									imageUrl ? "has-image" : "has-no-image"
								}`}
							>
								{imageUrl ? (
									<>
										<img src={imageUrl} alt={imageName} />
										<Button
											isDestructive
											variant="secondary"
											onClick={removeImage}
										>
											{__("Remove Image", "miscellaneous-gutenberg-blocks")}
										</Button>
									</>
								) : (
									<Button isPrimary onClick={open}>
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
				<div class="wp-block-miscellaneous-gutenberg-blocks-media-and-text--right">
					<InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
				</div>
			</div>
		</>
	);
}
