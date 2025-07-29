/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */

import { FoldHorizontal, UnfoldHorizontal } from "lucide-react";
import { __ } from "@wordpress/i18n";
import {
	ResizableBox,
	PanelBody,
	PanelRow,
	RangeControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from "@wordpress/components";
import { Button, ToolbarButton } from "@wordpress/components";
import { plus, check, desktop, tablet, mobile, button } from "@wordpress/icons"; // For the plus icon
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";
import { useSelect, select, subscribe, useDispatch } from "@wordpress/data";
import { useState } from "react";
import { InspectorLabel } from "../libs/components/inspector-label";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit(props) {
	const UnfoldHorizontalIcon = <UnfoldHorizontal />;
	const FoldHorizontalIcon = <FoldHorizontal />;
	const [layout, setLayout] = useState("desktop");
	const [viewport, setViewport] = useState("desktop");
	const { __experimentalSetPreviewDeviceType } = useDispatch("core/edit-post");
	// const [_width, _setWidth] = useState(0);
	// const [_tabletWidth, _setTabletWidth] = useState(0);
	// const [_mobileWidth, _setMobileWidth] = useState(0);
	const blockProps = useBlockProps();
	subscribe(() => {
		const currentViewport =
			select("core/edit-post").__experimentalGetPreviewDeviceType();
		setViewport(currentViewport);
	});
	const {
		attributes: {
			width,
			tablet_width,
			mobile_width,
			grow,
			tablet_grow,
			mobile_grow,
			shrink,
			tablet_shrink,
			mobile_shrink,
		},
		setAttributes,
		clientId,
		toggleSelection,
	} = props;

	const innerBlocks = useSelect(
		(select) => select("core/block-editor").getBlocks(clientId),
		[clientId],
	);
	const shouldRenderAppender = innerBlocks.length === 0;

	const MGBAppender = ({ clientId }) => {
		return shouldRenderAppender ? (
			<div class="flex-child-appender">
				<InnerBlocks.ButtonBlockAppender rootClientId={clientId} />
			</div>
		) : null;
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title="Settings">
					<InspectorLabel
						title="Width"
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
							value={width}
							label={null}
							onChange={(value) =>
								setAttributes({
									width: value,
								})
							}
							min={1}
							max={100}
						/>
					) : layout == "tablet" ? (
						<RangeControl
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							value={tablet_width}
							label={null}
							onChange={(value) =>
								setAttributes({
									tablet_width: value,
								})
							}
							min={1}
							max={100}
						/>
					) : (
						<RangeControl
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							value={mobile_width}
							label={null}
							onChange={(value) =>
								setAttributes({
									mobile_width: value,
								})
							}
							min={1}
							max={100}
						/>
					)}
					<InspectorLabel
						title="Grow"
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
							value={grow}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) => setAttributes({ grow: value })}
						>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={true}
								label="On"
							/>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={false}
								label="Off"
							/>
						</ToggleGroupControl>
					) : layout == "tablet" ? (
						<ToggleGroupControl
							value={tablet_grow}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) => setAttributes({ tablet_grow: value })}
						>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={true}
								label="On"
							/>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={false}
								label="Off"
							/>
						</ToggleGroupControl>
					) : (
						<ToggleGroupControl
							value={mobile_grow}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) => setAttributes({ mobile_grow: value })}
						>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={true}
								label="On"
							/>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={false}
								label="Off"
							/>
						</ToggleGroupControl>
					)}

					<InspectorLabel
						title="Shrink"
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
							value={shrink}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) => setAttributes({ shrink: value })}
						>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={true}
								label="On"
							/>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={false}
								label="Off"
							/>
						</ToggleGroupControl>
					) : layout == "tablet" ? (
						<ToggleGroupControl
							value={tablet_shrink}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) => setAttributes({ tablet_shrink: value })}
						>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={true}
								label="On"
							/>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={false}
								label="Off"
							/>
						</ToggleGroupControl>
					) : (
						<ToggleGroupControl
							value={mobile_shrink}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) => setAttributes({ mobile_shrink: value })}
						>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={true}
								label="On"
							/>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={false}
								label="Off"
							/>
						</ToggleGroupControl>
					)}
				</PanelBody>
			</InspectorControls>
			<div
				{...blockProps}
				style={{
					width: `${
						viewport == "Desktop"
							? width
							: viewport == "Tablet"
							? tablet_width
							: mobile_width
					}%`,
				}}
			>
				<div className="flexbox-box-wrapper">
					<InnerBlocks renderAppender={MGBAppender} />
				</div>
			</div>
		</>
	);
}
