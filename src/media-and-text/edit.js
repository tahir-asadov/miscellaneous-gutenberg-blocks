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
	ToolbarGroup,
	ToolbarButton,
	PanelBody,
	RangeControl,
} from "@wordpress/components";

import { InspectorLabel } from "../libs/components/inspector-label";
import { ArrowRightLeft } from "lucide-react";
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

import { useDispatch, useSelect, subscribe, select } from "@wordpress/data";

export default function Edit({
	attributes: {
		imageId,
		imageUrl,
		imageName,
		reversed,
		tablet_reversed,
		mobile_reversed,
		stacked,
		tablet_stacked,
		mobile_stacked,
		gap,
		tablet_gap,
		mobile_gap,
	},
	setAttributes,
	clientId,
}) {
	const [layout, setLayout] = useState("desktop");
	let previousDeviceType = select("core/editor").getDeviceType();
	subscribe(() => {
		const newDeviceType = select("core/editor").getDeviceType();

		if (newDeviceType !== previousDeviceType) {
			setLayout(newDeviceType?.toLowerCase());
			previousDeviceType = newDeviceType;
		}
	});
	const { __experimentalSetPreviewDeviceType } = useDispatch("core/edit-site");
	const innerBlockCount = useSelect(
		(select) => select("core/block-editor").getBlocks(clientId).length,
		[clientId],
	);

	const classNames = [];
	if (innerBlockCount == 1) {
		classNames.push(
			"miscellaneous-gutenberg-blocks-media-and-text--single-child",
		);
	}

	if (reversed) {
		classNames.push(
			"miscellaneous-gutenberg-blocks-media-and-text--is-reversed",
		);
	}
	if (tablet_reversed) {
		classNames.push(
			"miscellaneous-gutenberg-blocks-media-and-text--tablet-is-reversed",
		);
	}
	if (mobile_reversed) {
		classNames.push(
			"miscellaneous-gutenberg-blocks-media-and-text--mobile-is-reversed",
		);
	}
	if (stacked) {
		classNames.push(
			"miscellaneous-gutenberg-blocks-media-and-text--is-stacked",
		);
	}
	if (tablet_stacked) {
		classNames.push(
			"miscellaneous-gutenberg-blocks-media-and-text--tablet-is-stacked",
		);
	}
	if (mobile_stacked) {
		classNames.push(
			"miscellaneous-gutenberg-blocks-media-and-text--mobile-is-stacked",
		);
	}
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
							min={0}
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
							min={0}
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
							min={0}
							max={100}
						/>
					)}
					<InspectorLabel
						title="Reverse"
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
						<ToggleGroupControl
							value={reversed}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) => setAttributes({ reversed: value })}
						>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={true}
								label="Enabled"
							/>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={false}
								label="Disabled"
							/>
						</ToggleGroupControl>
					) : layout == "tablet" ? (
						<ToggleGroupControl
							value={tablet_reversed}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) => setAttributes({ tablet_reversed: value })}
						>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={true}
								label="Enabled"
							/>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={false}
								label="Disabled"
							/>
						</ToggleGroupControl>
					) : (
						<ToggleGroupControl
							value={mobile_reversed}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) => setAttributes({ mobile_reversed: value })}
						>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={true}
								label="Enabled"
							/>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={false}
								label="Disabled"
							/>
						</ToggleGroupControl>
					)}
					<InspectorLabel
						title="Stacked"
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
						<ToggleGroupControl
							value={stacked}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) => setAttributes({ stacked: value })}
						>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={true}
								label="Enabled"
							/>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={false}
								label="Disabled"
							/>
						</ToggleGroupControl>
					) : layout == "tablet" ? (
						<ToggleGroupControl
							value={tablet_stacked}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) => setAttributes({ tablet_stacked: value })}
						>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={true}
								label="Enabled"
							/>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={false}
								label="Disabled"
							/>
						</ToggleGroupControl>
					) : (
						<ToggleGroupControl
							value={mobile_stacked}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) => setAttributes({ mobile_stacked: value })}
						>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={true}
								label="Enabled"
							/>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={false}
								label="Disabled"
							/>
						</ToggleGroupControl>
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
								class={`miscellaneous-gutenberg-blocks-media-and-text--left ${
									imageUrl ? "has-image" : "has-no-image"
								}`}
							>
								{imageUrl ? (
									<>
										<img src={imageUrl} alt={imageName} />
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
				<div class="miscellaneous-gutenberg-blocks-media-and-text--right">
					<div>
						<InnerBlocks />
					</div>
				</div>
			</div>
		</>
	);
}
