<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'LAA1602114-clahp' );

/** Database username */
define( 'DB_USER', 'LAA1602114' );

/** Database password */
define( 'DB_PASSWORD', '07250927ak' );

/** Database hostname */
define( 'DB_HOST', 'mysql305.phy.lolipop.lan' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '*bD}B|%__bC_|1O,!T}J4A3X) 0RBY*h[CL eL,c-fRYjtOW2z!/Fq[<emh@/m,.' );
define( 'SECURE_AUTH_KEY',   'FdNb|hN3hx8YvG/Ni6u4c ktqKk:fuuLAjE,Qyu1zUV<Ct@%C6= =.<A^#=wG0yw' );
define( 'LOGGED_IN_KEY',     '-WbON:Ogr)3URXa~|qTaYM`TIc+PH1v~Uj0{}{aD/_J$Jl*JezR}M2PVIsmow|M*' );
define( 'NONCE_KEY',         'VGy55Hz_P@4LeGz$IQAA]mxa:>.vbk{2ez)w1<U]<SZyFcBk]  r9<OK}E:G2=|_' );
define( 'AUTH_SALT',         '`odZQ)R FrOznb4UGOfC_h!]$<H3y&c+K0TZ|`9?N*lQA!vyqEIk6v_ZE9#RS>SK' );
define( 'SECURE_AUTH_SALT',  'c~k7g1Sy1*|n`V#L5C<.2Kyn77 <D/]Q&)N&Z !RRvSkRC=I]jVQ|&l6jx%f?+tH' );
define( 'LOGGED_IN_SALT',    '1O`u,n|;#Jb/6!&.fZj!Kx*t!1pH?t}hhFa%n6_E%]0DW$;ozu/,+8vp}pE]2.O ' );
define( 'NONCE_SALT',        'D !lX1x-ZS8zF/TS-U;<6mh#q5qteNynMCAg]#|Aku,j%)X5W$@)vJAXk<)EB~8*' );
define( 'WP_CACHE_KEY_SALT', '|L,`@,.=/}o(Kqn3.&I5!+l}}?WLyZ-Xa4W%Ak{Nvl:@cm*{JtYC9T2Wyy_8U6H$' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
