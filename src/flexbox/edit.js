/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";
import {
	ResizableBox,
	PanelBody,
	PanelRow,
	RangeControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalUnitControl as UnitControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
	__experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
	SelectControl,
} from "@wordpress/components";
import { Button } from "@wordpress/components";
// import {
// 	row, stack, keyboardReturn,
// 	justifyCenter, justifyLeft, justifyRight, justifySpaceBetween, justifyStretch,
// 	alignLeft,
// 	alignCenter,
// 	alignRight,
// 	paragraph,
// 	formatBold,
// 	formatItalic,
// 	link
// } from '@wordpress/icons';
import {
	plus,
	check,
	desktop,
	tablet,
	mobile,
	button,
	justifyCenter,
	justifyLeft,
	justifyRight,
	justifySpaceBetween,
	justifyStretch,
	alignLeft,
	alignCenter,
	alignRight,
} from "@wordpress/icons"; // For the plus icon
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
import { useEffect, useState, useRef } from "react";
// import { InspectorLabel } from "../libs/global";

import { useDispatch } from "@wordpress/data";
import { InspectorLabel } from "../libs/components/inspector-label";
import { generateTemplate, numberRange } from "../libs/global";
/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

// Column icons
import oneColumn from "./../../svgs/one-column.svg";
import twoColumn from "./../../svgs/two-column.svg";
import threeColumn from "./../../svgs/three-column.svg";
import fourColumn from "./../../svgs/four-column.svg";
import fiveColumn from "./../../svgs/five-column.svg";
import sixColumn from "./../../svgs/six-column.svg";

export default function Edit(props) {
	const {
		attributes: {
			width,
			column,
			wrap,
			tablet_wrap,
			mobile_wrap,
			horizontal,
			tablet_horizontal,
			mobile_horizontal,
			reverse,
			tablet_reverse,
			mobile_reverse,
			gap,
			tablet_gap,
			mobile_gap,
			gap_unit,
			tablet_gap_unit,
			mobile_gap_unit,
			justify_content,
			tablet_justify_content,
			mobile_justify_content,
			align_items,
			tablet_align_items,
			mobile_align_items,
		},
		setAttributes,
		toggleSelection,
	} = props;
	const [layout, setLayout] = useState("desktop");
	const [parentWidth, setParentWidth] = useState(0);
	const { __experimentalSetPreviewDeviceType } = useDispatch("core/edit-post");

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

	const blockProps = useBlockProps({
		className: classNames.join(" "),
	});

	const innerBlocksProps =
		column != 0
			? useInnerBlocksProps(blockProps, {
					// allowedBlocks: [
					// 	"miscellaneous-gutenberg-blocks/box",
					// 	"miscellaneous-gutenberg-blocks/flexbox",
					// ],
					template: generateTemplate(column),
					templateLock: false,
			  })
			: useInnerBlocksProps(blockProps);
	const gap_units = [
		{
			value: "px",
			label: "px",
		},
		{
			value: "%",
			label: "%",
		},
		{
			value: "em",
			label: "em",
		},
		{
			value: "rem",
			label: "rem",
		},
		{
			value: "vw",
			label: "vw",
		},
		{
			value: "vh",
			label: "vh",
		},
	];

	return (
		<>
			<InspectorControls>
				<PanelBody title="Settings">
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
						<div
							style={{
								display: "flex",
								width: "100%",
								alignItems: "center",
								gap: "5px",
							}}
						>
							<div style={{ width: "70%" }}>
								<RangeControl
									__nextHasNoMarginBottom
									value={gap}
									label={null}
									RangeControl
									onChange={(value) =>
										setAttributes({
											gap: value,
										})
									}
									min={0}
									max={100}
								/>
							</div>
							<SelectControl
								label=""
								value={gap_unit}
								options={gap_units}
								__nextHasNoMarginBottom
								__next40pxDefaultSize
								onChange={(value) => {
									setAttributes({
										gap_unit: value,
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
								gap: "5px",
							}}
						>
							<div style={{ width: "70%" }}>
								<RangeControl
									__nextHasNoMarginBottom
									__next40pxDefaultSize
									value={tablet_gap}
									label={null}
									onChange={(value) => {
										setAttributes({
											tablet_gap: value,
										});
									}}
									min={0}
									max={100}
								/>
							</div>
							<SelectControl
								label=""
								value={tablet_gap_unit}
								options={gap_units}
								__nextHasNoMarginBottom
								__next40pxDefaultSize
								onChange={(value) => {
									setAttributes({
										tablet_gap_unit: value,
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
								gap: "5px",
							}}
						>
							<div style={{ width: "70%" }}>
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
							</div>
							<SelectControl
								label=""
								value={mobile_gap_unit}
								options={gap_units}
								__nextHasNoMarginBottom
								__next40pxDefaultSize
								onChange={(value) => {
									setAttributes({
										mobile_gap_unit: value,
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
				</PanelBody>
			</InspectorControls>
			{column == 0 ? (
				<div {...blockProps}>
					<div class="pick-column-count">
						<div
							onClick={() => {
								setAttributes({ column: 1 });
							}}
							title="One column"
						>
							<img src={oneColumn} fillColor={"#ccc"} height={48} />
						</div>
						<div
							onClick={() => {
								setAttributes({ column: 2 });
							}}
							title="Two column"
						>
							<img src={twoColumn} height={48} />
						</div>
						<div
							onClick={() => {
								setAttributes({ column: 3 });
							}}
							title="Three column"
						>
							<img src={threeColumn} height={48} />
						</div>
						<div
							onClick={() => {
								setAttributes({ column: 4 });
							}}
							title="Four column"
						>
							<img src={fourColumn} height={48} />
						</div>
						<div
							onClick={() => {
								setAttributes({ column: 5 });
							}}
							title="Five column"
						>
							<img src={fiveColumn} height={48} />
						</div>
						<div
							onClick={() => {
								setAttributes({ column: 6 });
							}}
							title="Six column"
						>
							<img src={sixColumn} height={48} />
						</div>
					</div>
				</div>
			) : (
				<div {...innerBlocksProps}></div>
			)}
		</>
	);
}
