<?php

$classes = [];

$widthType = !empty($attributes['widthType']) ? $attributes['widthType'] : 'full';
$tabletWidthType = !empty($attributes['tabletWidthType']) ? $attributes['tabletWidthType'] : 'full';
$mobileWidthType = !empty($attributes['mobileWidthType']) ? $attributes['mobileWidthType'] : 'full';

$width = !empty($attributes['width']) && $attributes['width'] > 0 ? $attributes['width'] . $attributes['widthUnit'] : '';
$tabletWidth = !empty($attributes['tabletWidth']) && $attributes['tabletWidth'] > 0 ? $attributes['tabletWidth'] . $attributes['tabletWidthUnit'] : '';
$mobileWidth = !empty($attributes['mobileWidth']) && $attributes['mobileWidth'] > 0 ? $attributes['mobileWidth'] . $attributes['mobileWidthUnit'] : '';

$wrap = !empty($attributes['wrap']) ? $attributes['wrap'] : '';
$tabletWrap = !empty($attributes['tabletWrap']) ? $attributes['tabletWrap'] : '';
$mobileWrap = !empty($attributes['mobileWrap']) ? $attributes['mobileWrap'] : '';

$direction = !empty($attributes['direction']) ? $attributes['direction'] : '';
$tabletDirection = !empty($attributes['tabletDirection']) ? $attributes['tabletDirection'] : '';
$mobileDirection = !empty($attributes['mobileDirection']) ? $attributes['mobileDirection'] : '';

$reverse = !empty($attributes['reverse']) && $attributes['reverse'] == 1;
$tabletReverse = !empty($attributes['tabletReverse']) && $attributes['tabletReverse'] == 1;
$mobileReverse = !empty($attributes['mobileReverse']) && $attributes['mobileReverse'] == 1;

$justifyContent = !empty($attributes['justifyContent']) ? $attributes['justifyContent'] : '';
$tabletJustifyContent = !empty($attributes['tabletJustifyContent']) ? $attributes['tabletJustifyContent'] : '';
$mobileJustifyContent = !empty($attributes['mobileJustifyContent']) ? $attributes['mobileJustifyContent'] : '';

$alignItems = !empty($attributes['alignItems']) ? $attributes['alignItems'] : '';
$tabletAlignItems = !empty($attributes['tabletAlignItems']) ? $attributes['tabletAlignItems'] : '';
$mobileAlignItems = !empty($attributes['mobileAlignItems']) ? $attributes['mobileAlignItems'] : '';

$grow = !empty($attributes['grow']) ? $attributes['grow'] : '';
$tabletGrow = !empty($attributes['tabletGrow']) ? $attributes['tabletGrow'] : '';
$mobileGrow = !empty($attributes['mobileGrow']) ? $attributes['mobileGrow'] : '';

$shrink = !empty($attributes['shrink']) ? $attributes['shrink'] : '';
$tabletShrink = !empty($attributes['tabletShrink']) ? $attributes['tabletShrink'] : '';
$mobileShrink = !empty($attributes['mobileShrink']) ? $attributes['mobileShrink'] : '';

$display = !empty($attributes['display']) ? $attributes['display'] : '';
$tabletDisplay = !empty($attributes['tabletDisplay']) ? $attributes['tabletDisplay'] : '';
$mobileDisplay = !empty($attributes['mobileDisplay']) ? $attributes['mobileDisplay'] : '';

if ($widthType == 'auto') {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--width-auto';
} else if ($widthType == 'initial') {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--width-initial';
}
if ($tabletWidthType == 'auto') {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--width-tablet-auto';
} else if ($tabletWidthType == 'initial') {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--width-tablet-initial';
}
if ($mobileWidthType == 'auto') {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--width-mobile-auto';
} else if ($mobileWidthType == 'initial') {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--width-mobile-initial';
}

if ($wrap == 'wrap') {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--wrap';
} else if ($wrap == 'no-wrap') {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--no-wrap';
}
if ($tabletWrap == 'wrap') {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--tablet-wrap';
} else if ($mobileWrap == 'wrap') {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--mobile-wrap';
}
if ($tabletWrap == 'no-wrap') {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--tablet-no-wrap';
} else if ($mobileWrap == 'no-wrap') {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--mobile-no-wrap';
}

if ($direction == 'horizontal') {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--horizontal';
} else if ($direction == 'vertical') {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--vertical';
}
if ($tabletDirection == 'horizontal') {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--tablet-horizontal';
}
if ($tabletDirection == 'vertical') {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--tablet-vertical';
}
if ($mobileDirection == 'horizontal') {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--mobile-horizontal';
} else if ($mobileDirection == 'vertical') {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--mobile-vertical';
}

if ($reverse) {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--reverse';
}
if ($tabletReverse) {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--tablet-reverse';
}
if ($mobileReverse) {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--mobile-reverse';
}

if ($grow == 'grow') {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--grow';
} else if ($grow == 'no-grow') {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--no-grow';
}
if ($tabletGrow == 'grow') {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--tablet-grow';
} else if ($tabletGrow == 'no-grow') {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--tablet-no-grow';
}
if ($mobileGrow == 'grow') {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--mobile-grow';
} else if ($mobileGrow == 'no-grow') {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--mobile-no-grow';
}

if ($shrink == 'shrink') {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--shrink';
} else if ($shrink == 'no-shrink') {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--no-shrink';
}
if ($tabletShrink == 'shrink') {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--tablet-shrink';
} else if ($tabletShrink == 'no-shrink') {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--tablet-no-shrink';
}
if ($mobileShrink == 'shrink') {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--mobile-shrink';
} else if ($mobileShrink == 'no-shrink') {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--mobile-no-shrink';
}


if ($display == 'flex') {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--flex';
} else if ($display == 'inline-flex') {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--inline-flex';
} else if ($display == 'none') {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--none';
}

if ($tabletDisplay == 'flex') {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--tablet-flex';
} else if ($tabletDisplay == 'inline-flex') {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--tablet-inline-flex';
} else if ($tabletDisplay == 'none') {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--tablet-none';
}

if ($mobileDisplay == 'flex') {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--mobile-flex';
} else if ($mobileDisplay == 'inline-flex') {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--mobile-inline-flex';
} else if ($mobileDisplay == 'none') {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--mobile-none';
}

if ($justifyContent) {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--justify-' . $justifyContent;
}
if ($tabletJustifyContent) {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--justify-tablet-' . $tabletJustifyContent;
}
if ($mobileJustifyContent) {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--justify-mobile-' . $mobileJustifyContent;
}

if ($alignItems) {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--align-' . $alignItems;
}
if ($tabletAlignItems) {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--align-tablet-' . $tabletAlignItems;
}
if ($mobileAlignItems) {
  $classes[] = 'miscellaneous-gutenberg-blocks-flexbox--align-mobile-' . $mobileAlignItems;
}

$columnGapUnit = !empty($attributes['columnGapUnit']) ? $attributes['columnGapUnit'] : 'px';
$tabletColumnGapUnit = !empty($attributes['tabletColumnGapUnit']) ? $attributes['tabletColumnGapUnit'] : 'px';
$mobileColumnGapUnit = !empty($attributes['mobileColumnGapUnit']) ? $attributes['mobileColumnGapUnit'] : 'px';

$rowGapUnit = !empty($attributes['rowGapUnit']) ? $attributes['rowGapUnit'] : 'px';
$tabletRowGapUnit = !empty($attributes['tabletRowGapUnit']) ? $attributes['tabletRowGapUnit'] : 'px';
$mobileRowGapUnit = !empty($attributes['mobileRowGapUnit']) ? $attributes['mobileRowGapUnit'] : 'px';

$columnGap = !empty($attributes['columnGap']) && $attributes['columnGap'] > 0 ? $attributes['columnGap'] . $columnGapUnit : 0;
$tabletColumnGap = !empty($attributes['tabletColumnGap']) && $attributes['tabletColumnGap'] > 0 ? $attributes['tabletColumnGap'] . $tabletColumnGapUnit : 0;
$mobileColumnGap = !empty($attributes['mobileColumnGap']) && $attributes['mobileColumnGap'] > 0 ? $attributes['mobileColumnGap'] . $mobileColumnGapUnit : 0;

$rowGap = !empty($attributes['rowGap']) && $attributes['rowGap'] > 0 ? $attributes['rowGap'] . $rowGapUnit : 0;
$tabletRowGap = !empty($attributes['tabletRowGap']) && $attributes['tabletRowGap'] > 0 ? $attributes['tabletRowGap'] . $tabletRowGapUnit : 0;
$mobileRowGap = !empty($attributes['mobileRowGap']) && $attributes['mobileRowGap'] > 0 ? $attributes['mobileRowGap'] . $mobileRowGapUnit : 0;

$additional_attributes['class'] = join(' ', $classes);
$additional_attributes['id'] = 'miscellaneous-gutenberg-blocks-' . uniqid();

$MobileStyles = ($widthType == 'custom' && $width != '') || $columnGap || $rowGap;
$hasMobileStyles = ($tabletWidthType == 'custom' && $tabletWidth != '') || $tabletColumnGap || $tabletRowGap;
$hasTabletStyles = ($mobileWidthType == 'custom' && $mobileWidth != '') || $mobileColumnGap || $mobileRowGap;

?>
<div <?php echo get_block_wrapper_attributes($additional_attributes); ?>>
  <?php

  if (!empty($block->inner_blocks)) {
    foreach ($block->inner_blocks as $inner_block) {
      echo $inner_block->render();
    }
  }

  ?>
</div>
<?php if ($MobileStyles || $hasMobileStyles || $hasTabletStyles): ?>
  <style>
    @media only screen {
      #<?php echo $additional_attributes['id']; ?> {
        <?php echo $widthType == 'custom' && $width != '' ? "width: {$width};" : ''; ?>
        <?php echo $columnGap ? "column-gap: $columnGap;" : ''; ?>
        <?php echo $rowGap ? "row-gap: $rowGap;" : ''; ?>
      }
    }

    @media only screen and (max-width:
      <?php echo MISC_GB_BLOCKS_MAX_TABLET_BREAKING_POINT; ?>
    ) {
      #<?php echo $additional_attributes['id']; ?> {
        <?php echo $tabletWidthType == 'custom' && $tabletWidth != '' ? "width: {$tabletWidth};" : ''; ?>
        <?php echo $tabletColumnGap ? "column-gap: $tabletColumnGap;" : ''; ?>
        <?php echo $tabletRowGap ? "row-gap: $tabletRowGap;" : ''; ?>
      }
    }

    @media only screen and (max-width:
      <?php echo MISC_GB_BLOCKS_MAX_MOBILE_BREAKING_POINT; ?>
    ) {
      #<?php echo $additional_attributes['id']; ?> {
        <?php echo $mobileWidthType == 'custom' && $mobileWidth != '' ? "width: {$mobileWidth};" : ''; ?>
        <?php echo $mobileColumnGap ? "column-gap: $mobileColumnGap;" : ''; ?>
        <?php echo $mobileRowGap ? "row-gap: $mobileRowGap;" : ''; ?>
      }
    }
  </style>
<?php endif; ?>