<?php

    $weight_loss_trainer_theme_css= "";

    /*--------------------------- Scroll to top positions -------------------*/

    $weight_loss_trainer_scroll_position = get_theme_mod( 'weight_loss_trainer_scroll_top_position','Right');
    if($weight_loss_trainer_scroll_position == 'Right'){
        $weight_loss_trainer_theme_css .='#button{';
            $weight_loss_trainer_theme_css .='right: 20px;';
        $weight_loss_trainer_theme_css .='}';
    }else if($weight_loss_trainer_scroll_position == 'Left'){
        $weight_loss_trainer_theme_css .='#button{';
            $weight_loss_trainer_theme_css .='left: 20px;';
        $weight_loss_trainer_theme_css .='}';
    }else if($weight_loss_trainer_scroll_position == 'Center'){
        $weight_loss_trainer_theme_css .='#button{';
            $weight_loss_trainer_theme_css .='right: 50%;left: 50%;';
        $weight_loss_trainer_theme_css .='}';
    }
