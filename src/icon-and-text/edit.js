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
	TextControl,
	PanelRow,
	PanelBody,
	RangeControl,
	ColorPalette,
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
import { useEffect, useState } from "react";

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
		imageContent,
		text,
		reversed,
		tabletReversed,
		mobileReversed,
		stacked,
		tabletStacked,
		mobileStacked,
		gap,
		tabletGap,
		mobileGap,
		imageWidth,
		svgColor,
	},
	setAttributes,
	clientId,
}) {
	const [layout, setLayout] = useState("desktop");
	const [svgContent, setSvgContent] = useState("");
	const [color, setColor] = useState("#111");
	useEffect(() => {
		if (imageUrl && imageUrl.endsWith(".svg")) {
			fetch(imageUrl)
				.then((response) => response.text())
				.then((svgText) => {
					setSvgContent(svgText);
					setAttributes({ imageContent: svgText });
				})
				.catch((error) => {
					console.error("Error fetching SVG:", error);
				});
		} else {
			setSvgContent("");
		}
	}, [imageUrl]);
	let previousDeviceType = select("core/editor").getDeviceType();
	subscribe(() => {
		const newDeviceType = select("core/editor").getDeviceType();

		if (newDeviceType !== previousDeviceType) {
			setLayout(newDeviceType?.toLowerCase());
			previousDeviceType = newDeviceType;
		}
	});

	let __experimentalSetPreviewDeviceType = (device) => {};
	const siteEditor = useDispatch("core/edit-site");
	if (siteEditor) {
		__experimentalSetPreviewDeviceType =
			siteEditor.__experimentalSetPreviewDeviceType;
	}
	const innerBlockCount = useSelect(
		(select) => select("core/block-editor").getBlocks(clientId).length,
		[clientId],
	);

	const classNames = [];
	if (innerBlockCount == 1) {
		classNames.push(
			"miscellaneous-gutenberg-blocks-icon-and-text--single-child",
		);
	}

	if (reversed) {
		classNames.push(
			"miscellaneous-gutenberg-blocks-icon-and-text--is-reversed",
		);
	}
	if (tabletReversed) {
		classNames.push(
			"miscellaneous-gutenberg-blocks-icon-and-text--tablet-is-reversed",
		);
	}
	if (mobileReversed) {
		classNames.push(
			"miscellaneous-gutenberg-blocks-icon-and-text--mobile-is-reversed",
		);
	}
	if (stacked) {
		classNames.push("miscellaneous-gutenberg-blocks-icon-and-text--is-stacked");
	}
	if (tabletStacked) {
		classNames.push(
			"miscellaneous-gutenberg-blocks-icon-and-text--tablet-is-stacked",
		);
	}
	if (mobileStacked) {
		classNames.push(
			"miscellaneous-gutenberg-blocks-icon-and-text--mobile-is-stacked",
		);
	}
	const blockProps = useBlockProps({
		className: classNames.join(" "),
		style: {
			gap:
				layout == "desktop" ? gap : layout == "tablet" ? tabletGap : mobileGap,
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
					<div style={{ marginTop: "10px", marginBottom: "10px" }}>
						<InspectorLabel title="Image width" hideLayoutButton={true} />
					</div>
					<RangeControl
						__nextHasNoMarginBottom
						__next40pxDefaultSize
						value={imageWidth}
						label={null}
						onChange={(value) =>
							setAttributes({
								imageWidth: value,
							})
						}
						min={0}
						max={500}
					/>
					<TextControl
						__nextHasNoMarginBottom
						__next40pxDefaultSize
						label="Add text"
						value={text}
						onChange={(value) =>
							setAttributes({
								text: value,
							})
						}
					/>
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
							value={tabletGap}
							label={null}
							onChange={(value) =>
								setAttributes({
									tabletGap: value,
								})
							}
							min={0}
							max={100}
						/>
					) : (
						<RangeControl
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							value={mobileGap}
							label={null}
							onChange={(value) =>
								setAttributes({
									mobileGap: value,
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
							value={tabletReversed}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) => setAttributes({ tabletReversed: value })}
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
							value={mobileReversed}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) => setAttributes({ mobileReversed: value })}
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
							value={tabletStacked}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) => setAttributes({ tabletStacked: value })}
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
							value={mobileStacked}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) => setAttributes({ mobileStacked: value })}
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
					<MediaUploadCheck>
						<MediaUpload
							allowedTypes={["image"]}
							multiple={false}
							value={imageId}
							onSelect={onImageSelect}
							render={({ open }) => (
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										justifyContent: "center",
										alignItems: "center",
										width: "100%",
									}}
								>
									{imageUrl ? (
										<>
											<img
												src={imageUrl}
												alt={imageName}
												style={{ width: "150px" }}
											/>
											<Button
												isDestructive
												variant="secondary"
												onClick={removeImage}
											>
												{__("Remove Image", "miscellaneous-gutenberg-blocks")}
											</Button>
										</>
									) : (
										<div
											style={{
												display: "flex",
												flexDirection: "column",
												justifyContent: "center",
												alignItems: "center",
												width: "100%",
											}}
										>
											<Button variant="primary" onClick={open}>
												{__(
													"Upload or Select Image",
													"miscellaneous-gutenberg-blocks",
												)}
											</Button>
										</div>
									)}
								</div>
							)}
						/>
					</MediaUploadCheck>
					<div style={{ marginTop: "10px", marginBottom: "10px" }}>
						<InspectorLabel title="SVG color" hideLayoutButton={true} />
					</div>
					<ColorPalette
						asButtons={true}
						clearable={true}
						width="100%"
						value={svgColor}
						onChange={(color) => setAttributes({ svgColor: color })}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				{imageUrl &&
					(imageUrl.endsWith(".svg") ? (
						<div className="miscellaneous-gutenberg-blocks-media-and-text--left">
							<span
								style={{
									color: svgColor,
									width: imageWidth,
									display: "inline-block",
								}}
								dangerouslySetInnerHTML={{ __html: imageContent }}
							></span>
						</div>
					) : (
						<div className="miscellaneous-gutenberg-blocks-media-and-text--left">
							<img
								style={{ width: imageWidth }}
								src={imageUrl}
								alt={imageName}
							/>
						</div>
					))}
				<div class="miscellaneous-gutenberg-blocks-icon-and-text--right">
					{text}
				</div>
			</div>
		</>
	);
}
