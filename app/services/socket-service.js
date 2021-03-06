;(function (){
    'use strict';

    angular
       .module('app')
       .factory('SocketService', SocketService);

    SocketService.$inject = [
        '$cookies', 
        '$state', 
        'socketFactory'
    ];

    function SocketService ($cookies, $state, socketFactory) {
       
        var user = GLOBAL.user($cookies, $state, $state.current.name);

        var socket = this; 
        var ss;

        var service = {
           connect          : connect,
           on               : on,
           emit             : emit,
           forward          : forward,
           removeListener   : removeListener,
           removeAll        : removeAll,
           disconnect       : disconnect

        };

        return service;

        function connect ()  { 
            
            // var connectSocket = io.connect(GLOBAL.socketUrl, { 
            //         query:'cookie=' + user.id, 
            //         transports: ['websocket']
            // }); 

            if (!ss) {
                var connectSocket = io.connect(GLOBAL.socketUrl); 

                var newSocket = socketFactory({
                    ioSocket : connectSocket,
                    forceNew : true
                });
                ss = newSocket;
            } else 
                newSocket = ss;
        
            socket = newSocket;
        }

        function on (event, callback) { 
            socket.on(event, function (data) {
                callback(data);
            });
        }
        
        function emit   (event, data, callback) { 
            socket.emit(event, data, function (data) {
                callback(data); 
            });
        }

        function forward  (event) { 
            socket.forward(event);
        }

        function removeListener   (event) { 
            socket.removeListener(event);
        }
        
        function removeAll () {
            socket.removeAllListeners();
        }
        
        function disconnect   () { 
            ss = undefined;
            socket.disconnect();
        }
        
        socket : socket
    
    }

})();