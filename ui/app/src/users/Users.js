const URL_AVATAR_ICONS = 'assets/svg/avatars.svg';
const URL_ICON_MENU    = 'assets/svg/menu.svg';
const URL_ICON_SHARE   = 'assets/svg/share.svg';
const URL_Round1_SHARE   = 'assets/svg/Roundicons-50.svg';
const URL_Round2_SHARE   = 'assets/svg/Roundicons-41.svg';
const URL_Round3_SHARE   = 'assets/svg/Roundicons-03.svg';
const URL_Round4_SHARE   = 'assets/svg/Roundicons-04.svg';
const URL_Round5_SHARE   = 'assets/svg/Roundicons-05.svg';
const URL_sketch_SHARE   = 'assets/svg/Roundicons-39.svg';
const URL_fair_SHARE   = 'assets/svg/Roundicons-17.svg';
const URL_cake_SHARE   = 'assets/svg/Roundicons-08.svg';
const URL_thongs_SHARE   = 'assets/svg/Roundicons-42.svg';
const URL_skate_SHARE   = 'assets/svg/Roundicons-03.svg';
// Load the custom app ES6 modules

import UsersController from 'users/UsersController'
import UsersService    from 'users/UsersDataservice'

import { ExternalLogger } from 'utils/LogDecorator';

let $log = new ExternalLogger();
    $log = $log.getInstance( "BOOTSTRAP" );
    $log.debug( "Configuring 'users' module" );

// Define the Angular 'users' module

let moduleName = angular
      .module( "users", [ ] )
      .service("usersService"       , UsersService )
      .controller("UsersController" , UsersController )
      .config( ($mdIconProvider) => {


        $log.debug( "Configuring $mdIconProvider" );

        // Register `dashboard` iconset & icons for $mdIcon service lookups

        $mdIconProvider
          .defaultIconSet( 'assets/svg/mdi.svg' )
          .icon('round1' ,URL_Round1_SHARE, 24)
          .icon('round2' ,URL_Round2_SHARE, 24)
          .icon('round3' ,URL_Round3_SHARE, 24)
          .icon('round4' ,URL_Round4_SHARE, 24)
          .icon('round5' ,URL_Round5_SHARE, 24)
          .icon('menu' ,URL_ICON_MENU, 24)
          .icon('share',URL_ICON_SHARE, 24)
          .icon('fair',URL_fair_SHARE, 24)
          .icon('cake',URL_cake_SHARE, 24)
          .icon('thongs',URL_thongs_SHARE, 24)
          .icon('skate',URL_skate_SHARE, 24)
          .icon('sketch',URL_sketch_SHARE, 24);
      })
      .name;

export default moduleName;



