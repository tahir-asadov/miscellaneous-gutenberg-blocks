<?php
$reversed = !empty($attributes['reversed']) && $attributes['reversed'] == 1;
$gap = !empty($attributes['gap']) ? $attributes['gap'] : 0;
$tablet_gap = !empty($attributes['tablet_gap']) ? $attributes['tablet_gap'] : 0;
$mobile_gap = !empty($attributes['mobile_gap']) ? $attributes['mobile_gap'] : 0;
// $show_search_icon = !empty($attributes['show_search_icon']) && $attributes['show_search_icon'] == 1;
// $disable_css = !empty($attributes['disable_css']) && $attributes['disable_css'] == 1;
// $search_placeholder = !empty($attributes['search_placeholder']) ? $attributes['search_placeholder'] : '';
// $category_text = !empty($attributes['category_text']) ? $attributes['category_text'] : '';
// $button_text = !empty($attributes['button_text']) ? $attributes['button_text'] : '';
$classes = [];
if ($reversed) {
  $classes[] = 'is-reversed';
}
// if ($show_search_icon) {
//   $classes[] = 'show-search-icon';
// }
// if ($show_category) {
//   $classes[] = 'show-category';
// }
$additional_attributes['class'] = join(' ', $classes);
$additional_attributes['id'] = 'miscellaneous-gutenberg-blocks-' . uniqid();
// $categories = get_categories();
print_r(get_block_wrapper_attributes($additional_attributes));
?>
<div <?php echo get_block_wrapper_attributes($additional_attributes); ?>>
  <div class="wp-block-miscellaneous-gutenberg-blocks-media-and-text--left">
    <?php if (!empty($attributes['imageUrl'])) { ?>
      <img src="<?php echo $attributes['imageUrl']; ?>" alt="<?php echo $attributes['imageName']; ?>">
    <?php } ?>
  </div>
  <div class="wp-block-miscellaneous-gutenberg-blocks-media-and-text--right"><?php echo $content; ?></div>
</div>
<style>
  #<?php echo $additional_attributes['id']; ?> {
    <?php echo "gap: {$gap}px;" ?>
  }

  @media only screen and (max-width: 1024px) {
    #<?php echo $additional_attributes['id']; ?> {
      <?php echo "gap: {$tablet_gap}px;" ?>
    }
  }

  @media only screen and (max-width: 600px) {
    #<?php echo $additional_attributes['id']; ?> {
      <?php echo "gap: {$mobile_gap}px;" ?>
    }
  }
</style>