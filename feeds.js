// 1. add your repository below
// 2. please alphabetize by name
// 3. commit & send pull request

var feedJson = angular.module('feedJson', []);

feedJson.controller('FeedCtrl', function($scope) {

    $scope.feeds = [

        {
            "name": "AlloyUI",
            "page": "https://github.com/liferay/alloy-ui",
            "feed": "https://github.com/liferay/alloy-ui/commits/master.atom"
        }, {
            "name": "Android Bootstrap",
            "page": "https://github.com/donnfelker/android-bootstrap",
            "feed": "https://github.com/donnfelker/android-bootstrap/commits/master.atom"
        }, {
            "name": "AngularStrap",
            "page": "https://github.com/mgcrea/angular-strap",
            "feed": "https://github.com/mgcrea/angular-strap/commits/master.atom"
        }, {
            "name": "Application Wizard for Bootstrap",
            "page": "https://github.com/amoffat/bootstrap-application-wizard",
            "feed": "https://github.com/amoffat/bootstrap-application-wizard/commits/master.atom"
        }, {
            "name": "Bootbox.js",
            "page": "https://github.com/makeusabrew/bootbox",
            "feed": "https://github.com/makeusabrew/bootbox/commits/master.atom"
        }, {
            "name": "Bootplus",
            "page": "https://github.com/aozora/bootplus/commits",
            "feed": "https://github.com/aozora/bootplus/commits/master.atom"
        }, {
            "name": "Bootply",
            "page": "https://github.com/iatek/bootply",
            "feed": "https://github.com/iatek/bootply/commits/master.atom"
        }, {
            "name": "Bootstrap::Sass::Rails",
            "page": "https://github.com/yabawock/bootstrap-sass-rails",
            "feed": "https://github.com/yabawock/bootstrap-sass-rails/commits/develop.atom"
        }, {
            "name": "Bootstrap - AngularJS directives",
            "page": "https://github.com/angular-ui/bootstrap",
            "feed": "https://github.com/angular-ui/bootstrap/commits/master.atom"
        }, {
            "name": "Bootstrap 3 for Drupal",
            "page": "https://drupal.org/project/bootstrap",
            "feed": "https://drupal.org/node/259843/commits/feed"
        }, {
            "name": "Bootstrap Admin for Wordpress",
            "page": "https://github.com/aristath/bootstrap-admin/commits",
            "feed": "https://github.com/aristath/bootstrap-admin/commits/master.atom"
        }, {
            "name": "Bootstrap Admin Theme",
            "page": "https://github.com/VinceG/Bootstrap-Admin-Theme",
            "feed": "https://github.com/VinceG/Bootstrap-Admin-Theme/commits/master.atom"
        }, {
            "name": "Bootstrap for Ember",
            "page": "https://github.com/ember-addons/bootstrap-for-ember",
            "feed": "https://github.com/ember-addons/bootstrap-for-ember/commits/master.atom"
        }, {
            "name": "Bootstrap for Sass",
            "page": "https://github.com/twbs/bootstrap-sass",
            "feed": "https://github.com/twbs/bootstrap-sass/commits/master.atom"
        }, {
            "name": "Bootstrap Form Builder",
            "page": "https://github.com/minikomi/Bootstrap-Form-Builder",
            "feed": "https://github.com/minikomi/Bootstrap-Form-Builder/commits/gh-pages.atom"
        }, {
            "name": "Bootstrap Glyphicons",
            "page": "https://github.com/marcoceppi/bootstrap-glyphicons",
            "feed": "https://github.com/marcoceppi/bootstrap-glyphicons/commits/master.atom"
        }, {
            "name": "Bootstrap Image Gallery",
            "page": "https://github.com/blueimp/Bootstrap-Image-Gallery",
            "feed": "https://github.com/blueimp/Bootstrap-Image-Gallery/commits/master.atom"
        }, {
            "name": "Bootstrap Jade",
            "page": "https://bitbucket.org/Tumbo/bootstrap-jade",
            "feed": "https://bitbucket.org/Tumbo/bootstrap-jade/rss"
        }, {
            "name": "Bootstrap jQuery Mobile Theme",
            "page": "https://github.com/commadelimited/jQuery-Mobile-Bootstrap-Theme",
            "feed": "https://github.com/commadelimited/jQuery-Mobile-Bootstrap-Theme/commits/master.atom"
        }, {
            "name": "Bootstrap Lightbox",
            "page": "https://github.com/jbutz/bootstrap-lightbox",
            "feed": "https://github.com/jbutz/bootstrap-lightbox/commits/master.atom"
        }, {
            "name": "Bootstrap Listr",
            "page": "https://github.com/idleberg/Bootstrap-Listr",
            "feed": "https://github.com/idleberg/Bootstrap-Listr/commits/master.atom"
        }, {
            "name": "Bootstrap Magic",
            "page": "https://github.com/pikock/bootstrap-magic",
            "feed": "https://github.com/pikock/bootstrap-magic/commits/master.atom"
        }, {
            "name": "Bootstrap Modal",
            "page": "https://github.com/jschr/bootstrap-modal",
            "feed": "https://github.com/jschr/bootstrap-modal/commits/master.atom"
        }, {
            "name": "Bootstrap Multiselect",
            "page": "https://github.com/davidstutz/bootstrap-multiselect",
            "feed": "https://github.com/davidstutz/bootstrap-multiselect/commits/master.atom"
        }, {
            "name": "Bootstrap Shortcodes",
            "page": "http://wordpress.org/plugins/bootstrap-shortcodes/",
            "feed": "http://plugins.trac.wordpress.org/log/bootstrap-shortcodes?limit=100&mode=stop_on_copy&format=rss"
        }, {
            "name": "Bootstrap Switch",
            "page": "https://github.com/nostalgiaz/bootstrap-switch",
            "feed": "https://github.com/nostalgiaz/bootstrap-switch/commits/master.atom"
        }, {
            "name": "Bootstrap Theme for Pinax",
            "page": "https://github.com/pinax/pinax-theme-bootstrap",
            "feed": "https://github.com/pinax/pinax-theme-bootstrap/commits/master.atom"
        }, {
            "name": "Bootstrap Tour",
            "page": "https://github.com/sorich87/bootstrap-tour",
            "feed": "https://github.com/sorich87/bootstrap-tour/commits/master.atom"
        }, {
            "name": "Bootstrap Tumblr Theme",
            "page": "https://github.com/mikejarema/bootstrap-tumblr-theme",
            "feed": "https://github.com/mikejarema/bootstrap-tumblr-theme/commits/master.atom"
        }, {
            "name": "Bootstrap Wysihtml5 for Rails",
            "page": "https://github.com/Nerian/bootstrap-wysihtml5-rails",
            "feed": "https://github.com/Nerian/bootstrap-wysihtml5-rails/commits/master.atom"
        }, {
            "name": "Bootstrap Zero",
            "page": "https://github.com/iatek/bootstrap-zero",
            "feed": "https://github.com/iatek/bootstrap-zero/commits/master.atom"
        }, {
            "name": "Bootstrap",
            "page": "https://github.com/twbs/bootstrap",
            "feed": "https://github.com/twbs/bootstrap/commits/master.atom"
        }, {
            "name": "bootstrap-3-upgrade",
            "page": "https://github.com/iatek/bootstrap-3-upgrade",
            "feed": "https://github.com/iatek/bootstrap-3-upgrade/commits/master.atom"
        }, {
            "name": "Bootstrap-CMS",
            "page": "https://github.com/GrahamCampbell/Bootstrap-CMS",
            "feed": "https://github.com/GrahamCampbell/Bootstrap-CMS/commits/master.atom"
        }, {
            "name": "bootstrap-datepicker",
            "page": "https://github.com/eternicode/bootstrap-datepicker",
            "feed": "https://github.com/eternicode/bootstrap-datepicker/commits/master.atom"
        }, {
            "name": "bootply-extras",
            "page": "https://github.com/iatek/bootply-extras",
            "feed": "https://github.com/iatek/bootply-extras/commits/master.atom"
        }, {
            "name": "bootstrap-google-plus",
            "page": "https://github.com/iatek/bootstrap-google-plus",
            "feed": "https://github.com/iatek/bootstrap-google-plus/commits/master.atom"
        }, {
            "name": "bootstrap-notify",
            "page": "https://github.com/goodybag/bootstrap-notify",
            "feed": "https://github.com/goodybag/bootstrap-notify/commits/master.atom"
        }, {
            "name": "bootstrap-progressbar",
            "page": "https://github.com/minddust/bootstrap-progressbar",
            "feed": "https://github.com/minddust/bootstrap-progressbar/commits/master.atom"
        }, {
            "name": "bootstrap-select",
            "page": "https://github.com/silviomoreto/bootstrap-select",
            "feed": "https://github.com/silviomoreto/bootstrap-select/commits/master.atom"
        }, {
            "name": "Bootstrap-wysihtml5",
            "page": "https://github.com/jhollingworth/bootstrap-wysihtml5",
            "feed": "https://github.com/jhollingworth/bootstrap-wysihtml5/commits/master.atom"
        }, {
            "name": "bootstrap-wysiwyg",
            "page": "https://github.com/mindmup/bootstrap-wysiwyg",
            "feed": "https://github.com/mindmup/bootstrap-wysiwyg/commits/master.atom"
        }, {
            "name": "bootstrap_dashboard",
            "page": "https://github.com/jhw/bootstrap_dashboard",
            "feed": "https://github.com/jhw/bootstrap_dashboard/commits/master.atom"
        }, {
            "name": "BootstrapCDN Wordpress Plugin",
            "page": "https://github.com/MaxCDN/bootstrapcdn-wordpress-plugin",
            "feed": "https://github.com/MaxCDN/bootstrapcdn-wordpress-plugin/commits/master.atom"
        }, {
            "name": "BootstrapCSSEditor",
            "page": "https://github.com/TupleGeo/BootstrapCSSEditor",
            "feed": "https://github.com/TupleGeo/BootstrapCSSEditor/commits/master.atom"
        }, {
            "name": "BootstrapFormHelpers",
            "page": "https://github.com/vlamanna/BootstrapFormHelpers",
            "feed": "https://github.com/vlamanna/BootstrapFormHelpers/commits/master.atom"
        }, {
            "name": "BootstrapWP",
            "page": "https://github.com/rachelbaker/bootstrapwp-Twitter-Bootstrap-for-WordPress",
            "feed": "https://github.com/rachelbaker/bootstrapwp-Twitter-Bootstrap-for-WordPress/commits/master.atom"
        }, {
            "name": "Bootstro.js",
            "page": "https://github.com/clu3/bootstro.js",
            "feed": "https://github.com/clu3/bootstro.js/commits/master.atom"
        }, {
            "name": "Bootswatch",
            "page": "https://github.com/thomaspark/bootswatch",
            "feed": "https://github.com/thomaspark/bootswatch/commits/gh-pages.atom"
        }, {
            "name": "CodeIgniter Bootstrap",
            "page": "https://github.com/sjlu/CodeIgniter-Bootstrap",
            "feed": "https://github.com/sjlu/CodeIgniter-Bootstrap/commits/master.atom"
        }, {
            "name": "Date Range Picker for Twitter Bootstrap",
            "page": "https://github.com/dangrossman/bootstrap-daterangepicker",
            "feed": "https://github.com/dangrossman/bootstrap-daterangepicker/commits/master.atom"
        }, {
            "name": "dir-listing-bootstrap",
            "page": "https://github.com/ael-code/dir-listing-bootstrap",
            "feed": "https://github.com/ael-code/dir-listing-bootstrap/commits/master.atom"
        }, {
            "name": "Django Bootstrap Toolkit",
            "page": "https://github.com/dyve/django-bootstrap-toolkit",
            "feed": "https://github.com/dyve/django-bootstrap-toolkit/commits/master.atom"
        }, {
            "name": "django-admin-bootstrapped",
            "page": "https://github.com/riccardo-forina/django-admin-bootstrapped",
            "feed": "https://github.com/riccardo-forina/django-admin-bootstrapped/commits/master.atom"
        }, {
            "name": "django-bootstrap3",
            "page": "https://github.com/dyve/django-bootstrap3",
            "feed": "https://github.com/dyve/django-bootstrap3/commits/master.atom"
        }, {
            "name": "DocStrap",
            "page": "https://github.com/terryweiss/docstrap",
            "feed": "https://github.com/terryweiss/docstrap/commits/master.atom"
        }, {
            "name": "Easy Bootstrap Shortcodes",
            "page": "http://wordpress.org/plugins/easy-bootstrap-shortcodes/",
            "feed": "http://plugins.trac.wordpress.org/log/easy-bootstrap-shortcodes?limit=100&mode=stop_on_copy&format=rss"
        }, {
            "name": "eFlexis.Dialog",
            "page": "https://github.com/emerbrito/eFlexis.Dialog",
            "feed": "https://github.com/emerbrito/eFlexis.Dialog/commits/master.atom"
        }, {
            "name": "Ember Bootstrap",
            "page": "https://github.com/emberjs-addons/ember-bootstrap",
            "feed": "https://github.com/emberjs-addons/ember-bootstrap/commits/master.atom"
        }, {
            "name": "Employee Directory",
            "page": "https://github.com/ccoenraets/directory-backbone-bootstrap",
            "feed": "https://github.com/ccoenraets/directory-backbone-bootstrap/commits/master.atom"
        }, {
            "name": "Flat UI Free",
            "page": "https://github.com/designmodo/Flat-UI",
            "feed": "https://github.com/designmodo/Flat-UI/commits/master.atom"
        }, {
            "name": "Flatstrap for Bootstrap 3",
            "page": "https://github.com/littlesparkvt/Flatstrap-for-Bootstrap-3",
            "feed": "https://github.com/littlesparkvt/Flatstrap-for-Bootstrap-3/commits/master.atom"
        }, {
            "name": "FlatStrap",
            "page": "https://github.com/littlesparkvt/flatstrap",
            "feed": "https://github.com/littlesparkvt/flatstrap/commits/master.atom"
        }, {
            "name": "Font Awesome",
            "page": "https://github.com/FortAwesome/Font-Awesome",
            "feed": "https://github.com/FortAwesome/Font-Awesome/commits/master.atom"
        }, {
            "name": "Formtastic Bootstrap",
            "page": "https://github.com/mjbellantoni/formtastic-bootstrap",
            "feed": "https://github.com/mjbellantoni/formtastic-bootstrap/commits/master.atom"
        }, {
            "name": "Fuel UX",
            "page": "https://github.com/ExactTarget/fuelux",
            "feed": "https://github.com/ExactTarget/fuelux/commits/master.atom"
        }, {
            "name": "Geo for Bootstrap",
            "page": "https://github.com/divshot/geo-bootstrap",
            "feed": "https://github.com/divshot/geo-bootstrap/commits/master.atom"
        }, {
            "name": "ghost-theme-bootstrap",
            "page": "https://github.com/fueledbydreams/ghost-theme-bootstrap",
            "feed": "https://github.com/fueledbydreams/ghost-theme-bootstrap/commits/master.atom"
        }, {
            "name": "GhostStrap",
            "page": "https://github.com/mojeda/GhostStrap",
            "feed": "https://github.com/mojeda/GhostStrap/commits/master.atom"
        }, {
            "name": "Git Bootstrap",
            "page": "https://github.com/gitbootstrap",
            "feed": "https://github.com/gitbootstrap/feeds/commits/master.atom"
        }, {
            "name": "GWT-Bootstrap",
            "page": "https://github.com/gwtbootstrap/gwt-bootstrap",
            "feed": "https://github.com/gwtbootstrap/gwt-bootstrap/commits/master.atom"
        }, {
            "name": "Iron Bootstrap",
            "page": "https://github.com/gyfchong/iron-bootstrap",
            "feed": "https://github.com/gyfchong/iron-bootstrap/commits/master.atom"
        }, {
            "name": "Jekyll-Bootstrap",
            "page": "https://github.com/plusjade/jekyll-bootstrap",
            "feed": "https://github.com/plusjade/jekyll-bootstrap/commits/master.atom"
        }, {
            "name": "jqBootstapValidation",
            "page": "https://github.com/ReactiveRaven/jqBootstrapValidation",
            "feed": "https://github.com/ReactiveRaven/jqBootstrapValidation/commits/master.atom"
        }, {
            "name": "jQuery UI Bootstrap",
            "page": "https://github.com/addyosmani/jquery-ui-bootstrap",
            "feed": "https://github.com/addyosmani/jquery-ui-bootstrap/commits/gh-pages.atom"
        }, {
            "name": "Kickstrap",
            "page": "https://github.com/ajkochanowicz/Kickstrap",
            "feed": "https://github.com/ajkochanowicz/Kickstrap/commits/master.atom"
        }, {
            "name": "Ladda for Bootstrap 3",
            "page": "https://github.com/msurguy/ladda-bootstrap",
            "feed": "https://github.com/msurguy/ladda-bootstrap/commits/master.atom"
        }, {
            "name": "Laravel 4 Bootstrap Starter Site",
            "page": "https://github.com/andrew13/Laravel-4-Bootstrap-Starter-Site",
            "feed": "https://github.com/andrew13/Laravel-4-Bootstrap-Starter-Site/commits/master.atom"
        }, {
            "name": "Less Rails Bootstrap",
            "page": "https://github.com/metaskills/less-rails-bootstrap",
            "feed": "https://github.com/metaskills/less-rails-bootstrap/commits/master.atom"
        }, {
            "name": "metro-bootstrap",
            "page": "https://github.com/TalksLab/metro-bootstrap",
            "feed": "https://github.com/TalksLab/metro-bootstrap/commits/master.atom"
        }, {
            "name": "MopaBootstrapBundle",
            "page": "https://github.com/phiamo/MopaBootstrapBundle",
            "feed": "https://github.com/phiamo/MopaBootstrapBundle/commits/master.atom"
        }, {
            "name": "Node Bootstrap",
            "page": "https://github.com/inadarei/nodebootstrap",
            "feed": "https://github.com/inadarei/nodebootstrap/commits/master.atom"
        }, {
            "name": "Roots Wordpress Theme",
            "page": "https://github.com/roots/roots",
            "feed": "https://github.com/roots/roots/commits/master.atom"
        }, {
            "name": "Sass Bootstrap",
            "page": "https://github.com/jlong/sass-bootstrap",
            "feed": "https://github.com/jlong/sass-bootstrap/commits/master.atom"
        }, {
            "name": "Shoestrap",
            "page": "https://github.com/shoestrap/shoestrap",
            "feed": "https://github.com/shoestrap/shoestrap/commits/master.atom"
        }, {
            "name": "Sinatra Bootstrap",
            "page": "https://github.com/adamstac/sinatra-bootstrap/",
            "feed": "https://github.com/adamstac/sinatra-bootstrap/commits/master.atom"
        }, {
            "name": "Sphinx Bootstrap Theme",
            "page": "https://github.com/ryan-roemer/sphinx-bootstrap-theme",
            "feed": "https://github.com/ryan-roemer/sphinx-bootstrap-theme/commits/master.atom"
        }, {
            "name": "Start Bootstrap",
            "page": "https://github.com/IronSummitMedia/startbootstrap",
            "feed": "https://github.com/IronSummitMedia/startbootstrap/commits/master.atom"
        }, {
            "name": "Strapdown.js Markdown Preview",
            "page": "https://github.com/michfield/sublime-strapdown-preview",
            "feed": "https://github.com/michfield/sublime-strapdown-preview/commits/master.atom"
        }, {
            "name": "Strapdown.js",
            "page": "https://github.com/arturadib/strapdown/commits",
            "feed": "https://github.com/arturadib/strapdown/commits/gh-pages.atom"
        }, {
            "name": "Sublime Text 2 Snippets for Laravel Bootstrapper",
            "page": "https://github.com/patricktalmadge/Bootstrapper_snippets",
            "feed": "https://github.com/patricktalmadge/Bootstrapper_snippets/commits/master.atom"
        }, {
            "name": "Sublime Text Twitter Bootstrap Snippets",
            "page": "https://github.com/devtellect/sublime-twitter-bootstrap-snippets",
            "feed": "https://github.com/devtellect/sublime-twitter-bootstrap-snippets/commits/master.atom"
        }, {
            "name": "t3bootstrap",
            "page": "https://github.com/medialis/t3bootstrap-project",
            "feed": "https://github.com/medialis/t3bootstrap-project/commits/master.atom"
        }, {
            "name": "Timepicker for Twitter Bootstrap",
            "page": "https://github.com/jdewit/bootstrap-timepicker",
            "feed": "https://github.com/jdewit/bootstrap-timepicker/commits/gh-pages.atom"
        }, {
            "name": "TODC Bootstrap",
            "page": "https://github.com/todc/todc-bootstrap",
            "feed": "https://github.com/todc/todc-bootstrap/commits/master.atom"
        }, {
            "name": "Twitter Bootstrap 3 Sublime Plugin",
            "page": "https://github.com/JasonMortonNZ/bs3-sublime-plugin",
            "feed": "https://github.com/JasonMortonNZ/bs3-sublime-plugin/commits/master.atom"
        }, {
            "name": "Twitter Bootstrap ClassNames Completion",
            "page": "https://github.com/Pleasurazy/Sublime-Twitter-Bootstrap-ClassNames",
            "feed": "https://github.com/Pleasurazy/Sublime-Twitter-Bootstrap-ClassNames/commits/master.atom"
        }, {
            "name": "Twitter Bootstrap for Compass",
            "page": "https://github.com/vwall/compass-twitter-bootstrap",
            "feed": "https://github.com/vwall/compass-twitter-bootstrap/commits/master.atom"
        }, {
            "name": "Twitter Bootstrap for Rails",
            "page": "https://github.com/anjlab/bootstrap-rails",
            "feed": "https://github.com/anjlab/bootstrap-rails/commits/master.atom"
        }, {
            "name": "Twitter Bootstrap for Rails",
            "page": "https://github.com/seyhunak/twitter-bootstrap-rails",
            "feed": "https://github.com/seyhunak/twitter-bootstrap-rails/commits/master.atom"
        }, {
            "name": "Twitter Bootstrap Hover Dropdown Plugin",
            "page": "https://github.com/CWSpear/twitter-bootstrap-hover-dropdown",
            "feed": "https://github.com/CWSpear/twitter-bootstrap-hover-dropdown/commits/master.atom"
        }, {
            "name": "WP Bootstrap Menu",
            "page": "http://wordpress.org/plugins/wp-bootstrap-navmenu/",
            "feed": "http://plugins.trac.wordpress.org/log/wp-bootstrap-navmenu?limit=100&mode=stop_on_copy&format=rss"
        }, {
            "name": "WP-Bootstrap",
            "page": "https://github.com/320press",
            "feed": "https://github.com/320press/wordpress-bootstrap/commits/master.atom"
        }, {
            "name": "wp-bootstrap-navwalker",
            "page": "https://github.com/twittem/wp-bootstrap-navwalker",
            "feed": "https://github.com/twittem/wp-bootstrap-navwalker/commits/master.atom"
        }, {
            "name": "X-editable",
            "page": "https://github.com/vitalets/x-editable",
            "feed": "https://github.com/vitalets/x-editable/commits/master.atom"
        }
    ];
});