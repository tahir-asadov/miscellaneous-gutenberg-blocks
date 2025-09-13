/**
 * WordPress dependencies
 */
import { useDispatch, useSelect, subscribe, select } from "@wordpress/data";
import {
	InnerBlocks,
	BlockControls,
	InspectorControls,
	useBlockProps,
	MediaUpload,
	MediaUploadCheck,
} from "@wordpress/block-editor";
import {
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
	Button,
	ToolbarGroup,
	ToolbarButton,
	PanelBody,
	RangeControl,
	ResizableBox,
	ToggleControl,
	BaseControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { useEntityProp, store as coreStore } from "@wordpress/core-data";
import "./editor.scss";

/**
 * External dependencies
 */
import { ArrowRightLeft } from "lucide-react";
import { useState } from "react";

/**
 * Internal dependencies
 */
import { InspectorLabel } from "../libs/components/inspector-label";

/**
 * Block edit function
 */
export default function Edit(props) {
	const [layout, setLayout] = useState("desktop");
	const {
		attributes: {
			imageId,
			imageUrl,
			imageName,
			imagePosition,
			showFeaturedImage,
			height,
			isLink,
		},
		setAttributes,
		context,
		clientId,
		isSelected,
		toggleSelection,
	} = props;
	const { postId, postType } = context;

	let __experimentalSetPreviewDeviceType = (device) => {};
	const siteEditor = useDispatch("core/edit-site");
	if (siteEditor) {
		__experimentalSetPreviewDeviceType =
			siteEditor.__experimentalSetPreviewDeviceType;
	}
	const [featuredImageId] = useEntityProp(
		"postType",
		postType,
		"featured_media",
		postId,
	);
	const media = useSelect(
		(select) => {
			return featuredImageId
				? select(coreStore).getMedia(featuredImageId)
				: null;
		},
		[featuredImageId],
	);

	// Get the image URL (falls back to full size if no specific size is available)
	const featuredImageUrl = media?.source_url || "";
	console.log("height", height);

	const blockProps = useBlockProps({
		// style: {
		// 	objectPosition: imagePosition,
		// },
	});

	const onImageSelect = (media) => {
		if (!media || !media.url) {
			setAttributes({ imageId: 0, imageUrl: "", imageName: "" });
			return;
		}

		setAttributes({
			imageId: media.id,
			imageUrl: media.sizes.large.url,
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
			<InspectorControls>
				<PanelBody title={__("Settings", "miscellaneous-gutenberg-blocks")}>
					<ToggleControl
						label={__(
							"Show post's featured image",
							"miscellaneous-gutenberg-blocks",
						)}
						__next40pxDefaultSize
						checked={showFeaturedImage}
						onChange={() => {
							setAttributes({ showFeaturedImage: !showFeaturedImage });
						}}
					/>
					<ToggleControl
						style={{ marginBottom: "15px" }}
						label={__("Link to Post", "miscellaneous-gutenberg-blocks")}
						__next40pxDefaultSize
						checked={isLink}
						onChange={() => {
							setAttributes({ isLink: !isLink });
						}}
					/>
					<ToggleGroupControl
						label={__("Image position", "miscellaneous-gutenberg-blocks")}
						value={imagePosition}
						isBlock={true}
						__nextHasNoMarginBottom
						onChange={(value) => setAttributes({ imagePosition: value })}
					>
						<ToggleGroupControlOption
							isAdaptiveWidth={true}
							value={"top"}
							label={__("Top", "miscellaneous-gutenberg-blocks")}
						/>
						<ToggleGroupControlOption
							isAdaptiveWidth={true}
							value={"center"}
							label={__("Center", "miscellaneous-gutenberg-blocks")}
						/>
						<ToggleGroupControlOption
							isAdaptiveWidth={true}
							value={"bottom"}
							label={__("bottom", "miscellaneous-gutenberg-blocks")}
						/>
					</ToggleGroupControl>
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
											<img
												src={imageUrl}
												alt={imageName}
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
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				<ResizableBox
					size={{
						height: height > 0 ? height : undefined,
					}}
					__experimentalShowTooltip={true}
					minHeight="50"
					enable={{
						top: false,
						right: false,
						bottom: true,
						left: false,
						topRight: false,
						bottomRight: false,
						bottomLeft: false,
						topLeft: false,
					}}
					onResizeStop={(event, direction, elt, delta) => {
						setAttributes({
							height: height + delta.height,
						});
						toggleSelection(true);
					}}
					onResizeStart={() => {
						toggleSelection(false);
					}}
					showHandle={isSelected}
				>
					{showFeaturedImage && featuredImageUrl ? (
						<img
							src={featuredImageUrl}
							style={{
								width: "100%",
								height: "100%",
								objectPosition: imagePosition,
							}}
						/>
					) : imageUrl ? (
						<img
							src={imageUrl}
							alt={imageName}
							style={{
								width: "100%",
								height: "100%",
								objectPosition: imagePosition,
							}}
						/>
					) : null}
				</ResizableBox>
			</div>
		</>
	);
}
