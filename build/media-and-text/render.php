<?php
$reversed = !empty($attributes['reversed']) && $attributes['reversed'] == 1;
$tablet_reversed = !empty($attributes['tablet_reversed']) && $attributes['tablet_reversed'] == 1;
$mobile_reversed = !empty($attributes['mobile_reversed']) && $attributes['mobile_reversed'] == 1;
$stacked = !empty($attributes['stacked']) && $attributes['stacked'] == 1;
$tablet_stacked = !empty($attributes['tablet_stacked']) && $attributes['tablet_stacked'] == 1;
$mobile_stacked = !empty($attributes['mobile_stacked']) && $attributes['mobile_stacked'] == 1;
$gap = !empty($attributes['gap']) ? $attributes['gap'] : 0;
$tablet_gap = !empty($attributes['tablet_gap']) ? $attributes['tablet_gap'] : 0;
$mobile_gap = !empty($attributes['mobile_gap']) ? $attributes['mobile_gap'] : 0;
$has_single_child = count($block->inner_blocks) == 1;
// $show_search_icon = !empty($attributes['show_search_icon']) && $attributes['show_search_icon'] == 1;
// $disable_css = !empty($attributes['disable_css']) && $attributes['disable_css'] == 1;
// $search_placeholder = !empty($attributes['search_placeholder']) ? $attributes['search_placeholder'] : '';
// $category_text = !empty($attributes['category_text']) ? $attributes['category_text'] : '';
// $button_text = !empty($attributes['button_text']) ? $attributes['button_text'] : '';
$classes = [];
if ($reversed) {
  $classes[] = 'miscellaneous-gutenberg-blocks-media-and-text--is-reversed';
}
if ($tablet_reversed) {
  $classes[] = 'miscellaneous-gutenberg-blocks-media-and-text--tablet-is-reversed';
}
if ($mobile_reversed) {
  $classes[] = 'miscellaneous-gutenberg-blocks-media-and-text--mobile-is-reversed';
}

if ($stacked) {
  $classes[] = 'miscellaneous-gutenberg-blocks-media-and-text--is-stacked';
}
if ($tablet_stacked) {
  $classes[] = 'miscellaneous-gutenberg-blocks-media-and-text--tablet-is-stacked';
}
if ($mobile_stacked) {
  $classes[] = 'miscellaneous-gutenberg-blocks-media-and-text--mobile-is-stacked';
}



if ($has_single_child) {
  $classes[] = 'miscellaneous-gutenberg-blocks-media-and-text--single-child';
}

// $has_single_child
// if ($show_search_icon) {
//   $classes[] = 'show-search-icon';
// }
// if ($show_category) {
//   $classes[] = 'show-category';
// }
$additional_attributes['class'] = join(' ', $classes);
$additional_attributes['id'] = 'miscellaneous-gutenberg-blocks-' . uniqid();
// $categories = get_categories();
?>
<div <?php echo get_block_wrapper_attributes($additional_attributes); ?>>
  <div class="miscellaneous-gutenberg-blocks-media-and-text--left">
    <?php if (!empty($attributes['imageUrl'])) { ?>
      <img src="<?php echo $attributes['imageUrl']; ?>" alt="<?php echo $attributes['imageName']; ?>">
    <?php } ?>
  </div>
  <div class="miscellaneous-gutenberg-blocks-media-and-text--right">
    <?php

    if (!empty($block->inner_blocks)) {
      foreach ($block->inner_blocks as $inner_block) {
        echo '<div>' . $inner_block->render() . '</div>';
      }
    }

    ?>
  </div>
</div>
<style>
  @media only screen and (min-width:
    <?php echo MISC_GB_BLOCKS_MIN_DESKTOP_BREAKING_POINT; ?>
  ) {
    #<?php echo $additional_attributes['id']; ?> {
      <?php echo "gap: {$gap}px;" ?>
    }
  }

  @media only screen and (min-width:
    <?php echo MISC_GB_BLOCKS_MIN_TABLET_BREAKING_POINT; ?>
  ) and (max-width:
    <?php echo MISC_GB_BLOCKS_MAX_TABLET_BREAKING_POINT; ?>
  ) {
    #<?php echo $additional_attributes['id']; ?> {
      <?php echo "gap: {$tablet_gap}px;" ?>
    }
  }

  @media only screen and (max-width:
    <?php echo MISC_GB_BLOCKS_MAX_MOBILE_BREAKING_POINT; ?>
  ) {
    #<?php echo $additional_attributes['id']; ?> {
      <?php echo "gap: {$mobile_gap}px;" ?>
    }
  }
</style>