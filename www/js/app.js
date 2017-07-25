angular.module('starter', ['ionic', 'starter.controllers'])
.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
  $ionicConfigProvider.tabs.position('bottom');
  $stateProvider
    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html'
  })
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/admenu.html'
  })
  .state('tab.feed', {
    url: '/feed',
    views: {
      'feed-tab': {
        templateUrl: 'templates/feed.html',
	       controller: 'search'
      }
    }
  })
  .state('tab.posts', {
    url: '/posts',
    views: {
      'feed-tab': {
        templateUrl: 'templates/posts.html'
        
      }
    }
  })

    
  //          .state('tab.report', {
  //   url: '/report',
  //   views: {
  //     'report-tab': {
  //       templateUrl: 'templates/report.html',
  //   controller: "addreport"
    
  //     }
  //   }
  // }) 
    .state('app.adfeed', {
    url: '/adfeed',
    views: {
      'adfeed-tab': {
        templateUrl: 'templates/adfeed.html',
    controller: 'search',
    controller: 'deletedposts'

   
    
      }
    }
  })
     .state('app.add', {
    url: '/add',
    views: {
      'add-tab': {
        templateUrl: 'templates/add.html',
   
    
      }
    }
  })
  .state('app.adposts', {
    url: '/adposts',
    views: {
      'adfeed-tab': {
        templateUrl: 'templates/adposts.html'
        // controller:'Head'
      }
    }
  })

    
  //    .state('app.adreport', {
  //   url: '/adreport',
  //   views: {
  //     'adreport-tab': {
  //       templateUrl: 'templates/adreport.html',
  //     controller: 'getreport',
  //     controller: 'deletereport'
    
  //     }
  //   }
  // })
  //    .state('app.createposts', {
  //   url: '/createposts',
  //   views: {
  //     'adfeed-tab': {
  //       templateUrl: 'templates/createposts.html',
  //   controller: "addposts"
    
  //     }
  //   }
  // })
      .state('app.edit', {
    url: '/edit',
    views: {
      'adfeed-tab': {
        templateUrl: 'templates/edit.html',
    controller: "editposts"
    
      }
    }
  })

.state('adminlogin', {
    url: '/adminlogin',
    templateUrl: 'templates/adminlogin.html'
  })
    .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html'
  })

   .state('setup', {
    url: '/setup',
    templateUrl: 'templates/setup.html'
  });
  $urlRouterProvider.otherwise('/setup');
});
