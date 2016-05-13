/**
 * Users DataService
 * Uses embedded, hard-coded data model; acts asynchronously to simulate
 * remote data service call(s).
 *
 * @returns {{loadAll: Function}}
 * @constructor
 */
function UsersDataservice($q, $log) {
  var users = [
        {
          name: 'hot Source',
          avatar: 'round1',
          content: 'src/users/view/points/point1.html'
        },
        {
          name: 'Ideation',
          avatar: 'round2',
          content: 'src/users/view/points/point2.html'
        },
        {
          name: 'Delivery',
          avatar: 'round3',
          content: 'src/users/view/points/point3.html'
        }
      ];

    $log = $log.getInstance( "UsersDataservice" );
    $log.debug( "instanceOf() ");

    // Promise-based API
    return {
      loadAll : function() {
        $log.debug("loadAll()");

        // Simulate async nature of real remote calls
        return $q.when(users);
      }
    };
}

export default [ '$q', '$log', UsersDataservice ];

