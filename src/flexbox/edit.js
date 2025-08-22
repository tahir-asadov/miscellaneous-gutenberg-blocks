/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";
import { select, subscribe } from "@wordpress/data";

// import * as vp from "@wordpress/viewport";
import {
	PanelBody,
	RangeControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalUnitControl as UnitControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
	__experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
	SelectControl,
} from "@wordpress/components"; // For the plus icon
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	InnerBlocks,
	useInnerBlocksProps,
	InspectorControls,
} from "@wordpress/block-editor";

import {
	AlignVerticalJustifyEnd,
	AlignVerticalJustifyStart,
	AlignVerticalJustifyCenter,
	AlignVerticalDistributeCenter,
	AlignVerticalSpaceBetween,
	AlignStartVertical,
	AlignEndVertical,
	AlignHorizontalJustifyCenter,
	AlignHorizontalSpaceBetween,
	AlignHorizontalSpaceAround,
	Ban,
} from "lucide-react";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";
import { useState } from "react";
// import { InspectorLabel } from "../libs/global";

import { useDispatch, useSelect } from "@wordpress/data";

import { InspectorLabel } from "../libs/components/inspector-label";
import { gapUnits } from "../libs/global";
/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

export default function Edit(props) {
	const {
		attributes: {
			wrap,
			tablet_wrap,
			mobile_wrap,
			horizontal,
			tablet_horizontal,
			mobile_horizontal,
			reverse,
			tablet_reverse,
			mobile_reverse,
			column_gap,
			tablet_column_gap,
			mobile_column_gap,
			column_gap_unit,
			tablet_column_gap_unit,
			mobile_column_gap_unit,
			row_gap,
			tablet_row_gap,
			mobile_row_gap,
			row_gap_unit,
			tablet_row_gap_unit,
			mobile_row_gap_unit,
			justify_content,
			tablet_justify_content,
			mobile_justify_content,
			align_items,
			tablet_align_items,
			mobile_align_items,
			width,
			tablet_width,
			mobile_width,
			width_unit,
			tablet_width_unit,
			mobile_width_unit,
			grow,
			tablet_grow,
			mobile_grow,
			shrink,
			tablet_shrink,
			mobile_shrink,
			hidden,
			tablet_hidden,
			mobile_hidden,
		},
		setAttributes,
	} = props;
	let previousDeviceType = select("core/editor").getDeviceType();
	subscribe(() => {
		const newDeviceType = select("core/editor").getDeviceType();

		if (newDeviceType !== previousDeviceType) {
			setLayout(newDeviceType?.toLowerCase());
			previousDeviceType = newDeviceType;
		}
	});

	const isSiteEditor = useSelect(
		(select) => select("core/edit-site") !== null,
		[],
	);

	const [layout, setLayout] = useState("desktop");
	let __experimentalSetPreviewDeviceType = (device) => {};
	const siteEditor = useDispatch("core/edit-site");
	if (siteEditor) {
		__experimentalSetPreviewDeviceType =
			siteEditor.__experimentalSetPreviewDeviceType;
	}
	const alignItemsStartIcon = <AlignVerticalJustifyStart width={17} />;
	const alignItemsEndIcon = <AlignVerticalJustifyEnd width={17} />;
	const alignItemsCenterIcon = <AlignVerticalJustifyCenter width={17} />;
	const alignItemsBaselineIcon = <AlignVerticalDistributeCenter width={17} />;
	const alignItemsStretchIcon = <AlignVerticalSpaceBetween width={17} />;
	const alignItemsNoneIcon = <Ban width={17} />;
	const AlignStartVerticalIcon = <AlignStartVertical width={17} />;
	const AlignEndVerticalIcon = <AlignEndVertical width={17} />;
	const AlignHorizontalJustifyCenterIcon = (
		<AlignHorizontalJustifyCenter width={17} />
	);
	const AlignHorizontalSpaceBetweenIcon = (
		<AlignHorizontalSpaceBetween width={17} />
	);
	const AlignHorizontalSpaceAroundIcon = (
		<AlignHorizontalSpaceAround width={17} />
	);

	const classNames = [];

	if (wrap) {
		classNames.push("miscellaneous-gutenberg-blocks-flexbox--wrap");
	}

	if (tablet_wrap) {
		classNames.push("miscellaneous-gutenberg-blocks-flexbox--tablet-wrap");
	}

	if (mobile_wrap) {
		classNames.push("miscellaneous-gutenberg-blocks-flexbox--mobile-wrap");
	}

	if (horizontal) {
		classNames.push("miscellaneous-gutenberg-blocks-flexbox--horizontal");
	} else {
		classNames.push("miscellaneous-gutenberg-blocks-flexbox--vertical");
	}

	if (tablet_horizontal) {
		classNames.push(
			"miscellaneous-gutenberg-blocks-flexbox--tablet-horizontal",
		);
	} else {
		classNames.push("miscellaneous-gutenberg-blocks-flexbox--tablet-vertical");
	}

	if (mobile_horizontal) {
		classNames.push(
			"miscellaneous-gutenberg-blocks-flexbox--mobile-horizontal",
		);
	} else {
		classNames.push("miscellaneous-gutenberg-blocks-flexbox--mobile-vertical");
	}

	if (reverse) {
		classNames.push("miscellaneous-gutenberg-blocks-flexbox--reverse");
	}
	if (tablet_reverse) {
		classNames.push("miscellaneous-gutenberg-blocks-flexbox--tablet-reverse");
	}
	if (mobile_reverse) {
		classNames.push("miscellaneous-gutenberg-blocks-flexbox--mobile-reverse");
	}
	classNames.push(
		`miscellaneous-gutenberg-blocks-flexbox--justify-${justify_content}`,
	);
	classNames.push(
		`miscellaneous-gutenberg-blocks-flexbox--justify-tablet-${tablet_justify_content}`,
	);
	classNames.push(
		`miscellaneous-gutenberg-blocks-flexbox--justify-mobile-${mobile_justify_content}`,
	);
	classNames.push(
		`miscellaneous-gutenberg-blocks-flexbox--align-${align_items}`,
	);
	classNames.push(
		`miscellaneous-gutenberg-blocks-flexbox--align-tablet-${tablet_align_items}`,
	);
	classNames.push(
		`miscellaneous-gutenberg-blocks-flexbox--align-mobile-${mobile_align_items}`,
	);

	if (grow) {
		classNames.push("miscellaneous-gutenberg-blocks-flexbox--grow");
	}
	if (tablet_grow) {
		classNames.push("miscellaneous-gutenberg-blocks-flexbox--tablet-grow");
	}
	if (mobile_grow) {
		classNames.push("miscellaneous-gutenberg-blocks-flexbox--mobile-grow");
	}
	if (shrink) {
		classNames.push("miscellaneous-gutenberg-blocks-flexbox--shrink");
	}
	if (tablet_shrink) {
		classNames.push("miscellaneous-gutenberg-blocks-flexbox--tablet-shrink");
	}
	if (mobile_shrink) {
		classNames.push("miscellaneous-gutenberg-blocks-flexbox--mobile-shrink");
	}
	if (hidden) {
		classNames.push("miscellaneous-gutenberg-blocks-flexbox--hidden");
	}
	if (tablet_hidden) {
		classNames.push("miscellaneous-gutenberg-blocks-flexbox--tablet-hidden");
	}
	if (mobile_hidden) {
		classNames.push("miscellaneous-gutenberg-blocks-flexbox--mobile-hidden");
	}
	const blockProps = useBlockProps({
		className: classNames.join(" "),
	});
	const innerBlocksProps = useInnerBlocksProps(blockProps);

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
						<div
							style={{
								display: "flex",
								width: "100%",
								alignItems: "center",
								marginTop: "5px",
								marginBottom: "10px",
								gap: "5px",
							}}
						>
							<div style={{ width: "70%" }}>
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
									min={0}
									max={500}
								/>
							</div>
							<SelectControl
								label=""
								value={width_unit}
								options={gapUnits}
								__nextHasNoMarginBottom
								__next40pxDefaultSize
								onChange={(value) => {
									setAttributes({
										width_unit: value,
									});
								}}
							/>
						</div>
					) : layout == "tablet" ? (
						<div
							style={{
								display: "flex",
								width: "100%",
								alignItems: "center",
								marginTop: "5px",
								marginBottom: "10px",
								gap: "5px",
							}}
						>
							<div style={{ width: "70%" }}>
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
									min={0}
								/>
							</div>
							<SelectControl
								label=""
								value={tablet_width_unit}
								options={gapUnits}
								__nextHasNoMarginBottom
								__next40pxDefaultSize
								onChange={(value) => {
									setAttributes({
										tablet_width_unit: value,
									});
								}}
							/>
						</div>
					) : (
						<div
							style={{
								display: "flex",
								width: "100%",
								alignItems: "center",
								marginTop: "5px",
								marginBottom: "10px",
								gap: "5px",
							}}
						>
							<div style={{ width: "70%" }}>
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
									min={0}
								/>
							</div>
							<SelectControl
								label=""
								value={mobile_width_unit}
								options={gapUnits}
								__nextHasNoMarginBottom
								__next40pxDefaultSize
								onChange={(value) => {
									setAttributes({
										mobile_width_unit: value,
									});
								}}
							/>
						</div>
					)}
					<InspectorLabel
						title="Wrap"
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
							value={wrap}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) => setAttributes({ wrap: value })}
						>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={true}
								label="Wrap"
							/>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={false}
								label="No Wrap"
							/>
						</ToggleGroupControl>
					) : layout == "tablet" ? (
						<ToggleGroupControl
							value={tablet_wrap}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) => setAttributes({ tablet_wrap: value })}
						>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={true}
								label="Wrap"
							/>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={false}
								label="No Wrap"
							/>
						</ToggleGroupControl>
					) : (
						<ToggleGroupControl
							value={mobile_wrap}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) => setAttributes({ mobile_wrap: value })}
						>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={true}
								label="Wrap"
							/>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={false}
								label="No Wrap"
							/>
						</ToggleGroupControl>
					)}
					<InspectorLabel
						title="Direction"
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
							value={horizontal}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) => setAttributes({ horizontal: value })}
						>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={true}
								label="Horizontal"
							/>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={false}
								label="Vertical"
							/>
						</ToggleGroupControl>
					) : layout == "tablet" ? (
						<ToggleGroupControl
							value={tablet_horizontal}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) => setAttributes({ tablet_horizontal: value })}
						>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={true}
								label="Horizontal"
							/>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={false}
								label="Vertical"
							/>
						</ToggleGroupControl>
					) : (
						<ToggleGroupControl
							value={mobile_horizontal}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) => setAttributes({ mobile_horizontal: value })}
						>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={true}
								label="Horizontal"
							/>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={false}
								label="Vertical"
							/>
						</ToggleGroupControl>
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
							value={reverse}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) => setAttributes({ reverse: value })}
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
							value={tablet_reverse}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) => setAttributes({ tablet_reverse: value })}
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
							value={mobile_reverse}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) => setAttributes({ mobile_reverse: value })}
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
						title="Column Gap"
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
						<div
							style={{
								display: "flex",
								width: "100%",
								alignItems: "center",
								marginTop: "5px",
								marginBottom: "10px",
								gap: "5px",
							}}
						>
							<div style={{ width: "70%" }}>
								<RangeControl
									__nextHasNoMarginBottom
									__next40pxDefaultSize
									value={column_gap}
									label={null}
									RangeControl
									onChange={(value) =>
										setAttributes({
											column_gap: value,
										})
									}
									min={0}
									max={100}
								/>
							</div>
							<SelectControl
								label=""
								value={column_gap_unit}
								options={gapUnits}
								__nextHasNoMarginBottom
								__next40pxDefaultSize
								onChange={(value) => {
									setAttributes({
										column_gap_unit: value,
									});
								}}
							/>
						</div>
					) : layout == "tablet" ? (
						<div
							style={{
								display: "flex",
								width: "100%",
								alignItems: "center",
								marginTop: "5px",
								marginBottom: "10px",
								gap: "5px",
							}}
						>
							<div style={{ width: "70%" }}>
								<RangeControl
									__nextHasNoMarginBottom
									__next40pxDefaultSize
									value={tablet_column_gap}
									label={null}
									onChange={(value) => {
										setAttributes({
											tablet_column_gap: value,
										});
									}}
									min={0}
									max={100}
								/>
							</div>
							<SelectControl
								label=""
								value={tablet_column_gap_unit}
								options={gapUnits}
								__nextHasNoMarginBottom
								__next40pxDefaultSize
								onChange={(value) => {
									setAttributes({
										tablet_column_gap_unit: value,
									});
								}}
							/>
						</div>
					) : (
						<div
							style={{
								display: "flex",
								width: "100%",
								alignItems: "center",
								marginTop: "5px",
								marginBottom: "10px",
								gap: "5px",
							}}
						>
							<div style={{ width: "70%" }}>
								<RangeControl
									__nextHasNoMarginBottom
									__next40pxDefaultSize
									value={mobile_column_gap}
									label={null}
									onChange={(value) =>
										setAttributes({
											mobile_column_gap: value,
										})
									}
									min={0}
									max={100}
								/>
							</div>
							<SelectControl
								label=""
								value={mobile_column_gap_unit}
								options={gapUnits}
								__nextHasNoMarginBottom
								__next40pxDefaultSize
								onChange={(value) => {
									setAttributes({
										mobile_column_gap_unit: value,
									});
								}}
							/>
						</div>
					)}
					<InspectorLabel
						title="Row Gap"
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
						<div
							style={{
								display: "flex",
								width: "100%",
								alignItems: "center",
								marginTop: "5px",
								marginBottom: "10px",
								gap: "5px",
							}}
						>
							<div style={{ width: "70%" }}>
								<RangeControl
									__nextHasNoMarginBottom
									__next40pxDefaultSize
									value={row_gap}
									label={null}
									onChange={(value) => {
										setAttributes({
											row_gap: value,
										});
									}}
									min={0}
									max={100}
								/>
							</div>
							<SelectControl
								label=""
								value={row_gap_unit}
								options={gapUnits}
								__nextHasNoMarginBottom
								__next40pxDefaultSize
								onChange={(value) => {
									setAttributes({
										row_gap_unit: value,
									});
								}}
							/>
						</div>
					) : layout == "tablet" ? (
						<div
							style={{
								display: "flex",
								width: "100%",
								alignItems: "center",
								marginTop: "5px",
								marginBottom: "10px",
								gap: "5px",
							}}
						>
							<div style={{ width: "70%" }}>
								<RangeControl
									__nextHasNoMarginBottom
									__next40pxDefaultSize
									value={tablet_row_gap}
									label={null}
									onChange={(value) => {
										setAttributes({
											tablet_row_gap: value,
										});
									}}
									min={0}
									max={100}
								/>
							</div>
							<SelectControl
								label=""
								value={tablet_row_gap_unit}
								options={gapUnits}
								__nextHasNoMarginBottom
								__next40pxDefaultSize
								onChange={(value) => {
									setAttributes({
										tablet_row_gap_unit: value,
									});
								}}
							/>
						</div>
					) : (
						<div
							style={{
								display: "flex",
								width: "100%",
								alignItems: "center",
								marginTop: "5px",
								marginBottom: "10px",
								gap: "5px",
							}}
						>
							<div style={{ width: "70%" }}>
								<RangeControl
									__nextHasNoMarginBottom
									__next40pxDefaultSize
									value={mobile_row_gap}
									label={null}
									onChange={(value) => {
										setAttributes({
											mobile_row_gap: value,
										});
									}}
									min={0}
									max={100}
								/>
							</div>
							<SelectControl
								label=""
								value={mobile_row_gap_unit}
								options={gapUnits}
								__nextHasNoMarginBottom
								__next40pxDefaultSize
								onChange={(value) => {
									setAttributes({
										mobile_row_gap_unit: value,
									});
								}}
							/>
						</div>
					)}
					<InspectorLabel
						title="Justify Content"
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
							value={justify_content}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) => setAttributes({ justify_content: value })}
						>
							<ToggleGroupControlOptionIcon
								icon={AlignStartVerticalIcon}
								value="flex-start"
								label="Flex start"
							/>
							<ToggleGroupControlOptionIcon
								icon={AlignEndVerticalIcon}
								value="flex-end"
								label="Flex end"
							/>
							<ToggleGroupControlOptionIcon
								icon={AlignHorizontalJustifyCenterIcon}
								value="center"
								label="Center"
							/>
							<ToggleGroupControlOptionIcon
								icon={AlignHorizontalSpaceBetweenIcon}
								value="space-between"
								label="Space Between"
							/>
							<ToggleGroupControlOptionIcon
								icon={AlignHorizontalSpaceAroundIcon}
								value="space-around"
								label="Space Around"
							/>
						</ToggleGroupControl>
					) : layout == "tablet" ? (
						<ToggleGroupControl
							value={tablet_justify_content}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) =>
								setAttributes({ tablet_justify_content: value })
							}
						>
							<ToggleGroupControlOptionIcon
								icon={AlignStartVerticalIcon}
								value="flex-start"
								label="Flex start"
							/>
							<ToggleGroupControlOptionIcon
								icon={AlignEndVerticalIcon}
								value="flex-end"
								label="Flex end"
							/>
							<ToggleGroupControlOptionIcon
								icon={AlignHorizontalJustifyCenterIcon}
								value="center"
								label="Center"
							/>
							<ToggleGroupControlOptionIcon
								icon={AlignHorizontalSpaceBetweenIcon}
								value="space-between"
								label="Space Between"
							/>
							<ToggleGroupControlOptionIcon
								icon={AlignHorizontalSpaceAroundIcon}
								value="space-around"
								label="Space Around"
							/>
						</ToggleGroupControl>
					) : (
						<ToggleGroupControl
							value={mobile_justify_content}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) =>
								setAttributes({ mobile_justify_content: value })
							}
						>
							<ToggleGroupControlOptionIcon
								icon={AlignStartVerticalIcon}
								value="flex-start"
								label="Flex start"
							/>
							<ToggleGroupControlOptionIcon
								icon={AlignEndVerticalIcon}
								value="flex-end"
								label="Flex end"
							/>
							<ToggleGroupControlOptionIcon
								icon={AlignHorizontalJustifyCenterIcon}
								value="center"
								label="Center"
							/>
							<ToggleGroupControlOptionIcon
								icon={AlignHorizontalSpaceBetweenIcon}
								value="space-between"
								label="Space Between"
							/>
							<ToggleGroupControlOptionIcon
								icon={AlignHorizontalSpaceAroundIcon}
								value="space-around"
								label="Space Around"
							/>
						</ToggleGroupControl>
					)}
					<InspectorLabel
						title="Align items"
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
							value={align_items}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) => setAttributes({ align_items: value })}
						>
							<ToggleGroupControlOptionIcon
								icon={alignItemsStartIcon}
								value="flex-start"
								label="Flex start"
							/>
							<ToggleGroupControlOptionIcon
								icon={alignItemsEndIcon}
								value="flex-end"
								label="Flex end"
							/>
							<ToggleGroupControlOptionIcon
								icon={alignItemsCenterIcon}
								value="center"
								label="Center"
							/>
							<ToggleGroupControlOptionIcon
								icon={alignItemsBaselineIcon}
								value="baseline"
								label="Baseline"
							/>
							<ToggleGroupControlOptionIcon
								icon={alignItemsStretchIcon}
								value="stretch"
								label="Stretch"
							/>
							<ToggleGroupControlOptionIcon
								icon={alignItemsNoneIcon}
								value="none"
								label="None"
							/>
						</ToggleGroupControl>
					) : layout == "tablet" ? (
						<ToggleGroupControl
							value={tablet_align_items}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) => setAttributes({ tablet_align_items: value })}
						>
							<ToggleGroupControlOptionIcon
								icon={alignItemsStartIcon}
								value="flex-start"
								label="Flex start"
							/>
							<ToggleGroupControlOptionIcon
								icon={alignItemsEndIcon}
								value="flex-end"
								label="Flex end"
							/>
							<ToggleGroupControlOptionIcon
								icon={alignItemsCenterIcon}
								value="center"
								label="Center"
							/>
							<ToggleGroupControlOptionIcon
								icon={alignItemsBaselineIcon}
								value="baseline"
								label="Baseline"
							/>
							<ToggleGroupControlOptionIcon
								icon={alignItemsStretchIcon}
								value="stretch"
								label="Stretch"
							/>
							<ToggleGroupControlOptionIcon
								icon={alignItemsNoneIcon}
								value="none"
								label="None"
							/>
						</ToggleGroupControl>
					) : (
						<ToggleGroupControl
							value={mobile_align_items}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) => setAttributes({ mobile_align_items: value })}
						>
							<ToggleGroupControlOptionIcon
								icon={alignItemsStartIcon}
								value="flex-start"
								label="Flex start"
							/>
							<ToggleGroupControlOptionIcon
								icon={alignItemsEndIcon}
								value="flex-end"
								label="Flex end"
							/>
							<ToggleGroupControlOptionIcon
								icon={alignItemsCenterIcon}
								value="center"
								label="Center"
							/>
							<ToggleGroupControlOptionIcon
								icon={alignItemsBaselineIcon}
								value="baseline"
								label="Baseline"
							/>
							<ToggleGroupControlOptionIcon
								icon={alignItemsStretchIcon}
								value="stretch"
								label="Stretch"
							/>
							<ToggleGroupControlOptionIcon
								icon={alignItemsNoneIcon}
								value="none"
								label="None"
							/>
						</ToggleGroupControl>
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

					<InspectorLabel
						title="Hidden"
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
							value={hidden}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) => setAttributes({ hidden: value })}
						>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={true}
								label="Yes"
							/>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={false}
								label="No"
							/>
						</ToggleGroupControl>
					) : layout == "tablet" ? (
						<ToggleGroupControl
							value={tablet_hidden}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) => setAttributes({ tablet_hidden: value })}
						>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={true}
								label="Yes"
							/>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={false}
								label="No"
							/>
						</ToggleGroupControl>
					) : (
						<ToggleGroupControl
							value={mobile_hidden}
							isBlock={true}
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							onChange={(value) => setAttributes({ mobile_hidden: value })}
						>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={true}
								label="Yes"
							/>
							<ToggleGroupControlOption
								isAdaptiveWidth={true}
								value={false}
								label="No"
							/>
						</ToggleGroupControl>
					)}
				</PanelBody>
			</InspectorControls>
			<div
				{...innerBlocksProps}
				style={{
					width: `${
						layout == "desktop"
							? width > 0
								? `${width}${width_unit}`
								: "initial"
							: layout == "tablet"
							? tablet_width > 0
								? `${tablet_width}${tablet_width_unit}`
								: "initial"
							: mobile_width > 0
							? `${mobile_width}${mobile_width_unit}`
							: "initial"
					}`,
					columnGap: `${
						layout == "desktop"
							? column_gap > 0
								? `${column_gap}${column_gap_unit}`
								: "initial"
							: layout == "tablet"
							? tablet_column_gap > 0
								? `${tablet_column_gap}${tablet_column_gap_unit}`
								: "initial"
							: mobile_column_gap > 0
							? `${mobile_column_gap}${mobile_column_gap_unit}`
							: "initial"
					}`,
					rowGap: `${
						layout == "desktop"
							? row_gap > 0
								? `${row_gap}${row_gap_unit}`
								: "initial"
							: layout == "tablet"
							? tablet_row_gap > 0
								? `${tablet_row_gap}${tablet_row_gap_unit}`
								: "initial"
							: mobile_row_gap > 0
							? `${mobile_row_gap}${mobile_row_gap_unit}`
							: "initial"
					}`,
				}}
			></div>
		</>
	);
}
