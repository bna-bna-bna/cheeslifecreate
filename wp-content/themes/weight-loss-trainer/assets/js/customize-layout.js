(function( $ ) {
	wp.customize.bind( 'ready', function() {

		var optPrefix = '#customize-control-weight_loss_trainer_options-';
		
		// Label
		function weight_loss_trainer_customizer_label( id, title ) {

			// Site Identity

			if ( id === 'custom_logo' || id === 'site_icon' ) {
				$( '#customize-control-'+ id ).before('<li class="tab-title customize-control">'+ title  +'</li>');
			} else {
				$( '#customize-control-weight_loss_trainer_options-'+ id ).before('<li class="tab-title customize-control">'+ title +'</li>');
			}

			// General Setting

			if ( id === 'weight_loss_trainer_scroll_hide' || id === 'weight_loss_trainer_preloader_hide' || id === 'weight_loss_trainer_sticky_header' || id === 'weight_loss_trainer_products_per_row' || id === 'weight_loss_trainer_scroll_top_position' || id === 'weight_loss_trainer_products_per_row')  {
				$( '#customize-control-'+ id ).before('<li class="tab-title customize-control">'+ title  +'</li>');
			} else {
				$( '#customize-control-weight_loss_trainer_options-'+ id ).before('<li class="tab-title customize-control">'+ title +'</li>');
			}

			// Colors

			if ( id === 'weight_loss_trainer_theme_color' || id === 'background_color' || id === 'background_image' ) {
				$( '#customize-control-'+ id ).before('<li class="tab-title customize-control">'+ title  +'</li>');
			} else {
				$( '#customize-control-weight_loss_trainer_options-'+ id ).before('<li class="tab-title customize-control">'+ title +'</li>');
			}

			// Header Image

			if ( id === 'header_image' ) {
				$( '#customize-control-'+ id ).before('<li class="tab-title customize-control">'+ title  +'</li>');
			} else {
				$( '#customize-control-weight_loss_trainer_options-'+ id ).before('<li class="tab-title customize-control">'+ title +'</li>');
			}

			// Social Icon

			if ( id === 'weight_loss_trainer_facebook_icon' || id === 'weight_loss_trainer_twitter_icon' || id === 'weight_loss_trainer_intagram_icon'|| id === 'weight_loss_trainer_linkedin_icon'|| id === 'weight_loss_trainer_pintrest_icon' ) {
				$( '#customize-control-'+ id ).before('<li class="tab-title customize-control">'+ title  +'</li>');
			} else {
				$( '#customize-control-weight_loss_trainer_options-'+ id ).before('<li class="tab-title customize-control">'+ title +'</li>');
			}

			//  Header

			if ( id === 'weight_loss_trainer_topbar_phone_text' || id === 'weight_loss_trainer_topbar_text' || id === 'weight_loss_trainer_topbar_mail_text' || id === 'weight_loss_trainer_header_button_text' ) {
				$( '#customize-control-'+ id ).before('<li class="tab-title customize-control">'+ title  +'</li>');
			} else {
				$( '#customize-control-weight_loss_trainer_options-'+ id ).before('<li class="tab-title customize-control">'+ title +'</li>');
			}


			// Slider

			if ( id === 'weight_loss_trainer_top_slider_page1' ) {
				$( '#customize-control-'+ id ).before('<li class="tab-title customize-control">'+ title  +'</li>');
			} else {
				$( '#customize-control-weight_loss_trainer_options-'+ id ).before('<li class="tab-title customize-control">'+ title +'</li>');
			}

			// Popular Recipes

			if ( id === 'weight_loss_trainer_services_heading' ) {
				$( '#customize-control-'+ id ).before('<li class="tab-title customize-control">'+ title  +'</li>');
			} else {
				$( '#customize-control-weight_loss_trainer_options-'+ id ).before('<li class="tab-title customize-control">'+ title +'</li>');
			}

			// Footer

			if ( id === 'weight_loss_trainer_footer_text_setting' ) {
				$( '#customize-control-'+ id ).before('<li class="tab-title customize-control">'+ title  +'</li>');
			} else {
				$( '#customize-control-weight_loss_trainer_options-'+ id ).before('<li class="tab-title customize-control">'+ title +'</li>');
			}
			
		}

	    // Site Identity
		weight_loss_trainer_customizer_label( 'custom_logo', 'Logo Setup' );
		weight_loss_trainer_customizer_label( 'site_icon', 'Favicon' );

		// General Setting
		weight_loss_trainer_customizer_label( 'weight_loss_trainer_preloader_hide', 'Preloader' );
		weight_loss_trainer_customizer_label( 'weight_loss_trainer_scroll_hide', 'Scroll To Top' );
		weight_loss_trainer_customizer_label( 'weight_loss_trainer_scroll_top_position', 'Scroll to top Position' );
		weight_loss_trainer_customizer_label( 'weight_loss_trainer_products_per_row', 'woocommerce Setting' );

		// Colors
		weight_loss_trainer_customizer_label( 'weight_loss_trainer_theme_color', 'Theme Color' );
		weight_loss_trainer_customizer_label( 'background_color', 'Colors' );
		weight_loss_trainer_customizer_label( 'background_image', 'Image' );

		//Header Image
		weight_loss_trainer_customizer_label( 'header_image', 'Header Image' );

		// Social Icon
		weight_loss_trainer_customizer_label( 'weight_loss_trainer_facebook_icon', 'Facebook' );
		weight_loss_trainer_customizer_label( 'weight_loss_trainer_twitter_icon', 'Twitter' );
		weight_loss_trainer_customizer_label( 'weight_loss_trainer_intagram_icon', 'Intagram' );
		weight_loss_trainer_customizer_label( 'weight_loss_trainer_linkedin_icon', 'Linkedin' );
		weight_loss_trainer_customizer_label( 'weight_loss_trainer_pintrest_icon', 'Pintrest' );

		// Header
		weight_loss_trainer_customizer_label( 'weight_loss_trainer_topbar_text', 'Topbar Text' );
		weight_loss_trainer_customizer_label( 'weight_loss_trainer_topbar_phone_text', 'Phone Number' );
		weight_loss_trainer_customizer_label( 'weight_loss_trainer_topbar_mail_text', 'Email Address' );
		weight_loss_trainer_customizer_label( 'weight_loss_trainer_header_button_text', 'Header Button' );

		//Slider
		weight_loss_trainer_customizer_label( 'weight_loss_trainer_top_slider_page1', 'Slider' );

		//Popular Recipes
		weight_loss_trainer_customizer_label( 'weight_loss_trainer_services_heading', 'Popular Recipes' );

		//Footer
		weight_loss_trainer_customizer_label( 'weight_loss_trainer_footer_text_setting', 'Footer' );
	

	});

})( jQuery );
