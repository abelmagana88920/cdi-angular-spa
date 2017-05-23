/*
*   put all global variables
*   inside GLOBAL object
*/

var GLOBAL = { 

    host : 'https://jsonplaceholder.typicode.com', 
    socket : 'http:socket',
    socketUrl: 'http://52.74.192.141:8083',
    roadApiKey : 'roadApiKey',
    pcc: '63',
    map_default_position : [14.67512834600248,121.04331314563751], //Quezon city
    display_page: [10,15,20,30,50,100],
    page_max_size: 5,
    date_format: 'MMM dd, yyyy',
    time_format: 'HH:mm',
    datetime_format : 'HH:mm MMM dd, yyyy',
    calendar : ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
    appCache : {
        clients:'', accounts:'', sorters:'', users:'', 
        messengers:'', epod_status:'', epod_failure_reason:'', zones:'', 
        documents:'', contact_persons:'', soa:'', soa_ssf:'', soa_ff:'', 
        soa_d:'', bundles:'', assignments:''
    },
    managePcc : function (data, field) { 

        if (data)
		for (var i = 0; i < data.length; i++) { 
			var phone_field = angular.copy(data[i][field]); 
			data[i][field] = this.convertPcc(phone_field);
		};

		return data;

	},
	convertPcc : function (pcc_data) { 

		var phone_value = pcc_data ? ('+' + this.pcc + pcc_data.substr(-10)) : '';
		return phone_value;
	
    },
	obj_length : function(object_val) { 

		var len = 0;
		for (var o in object_val) 
		    len++; 

		return len;

	},
	extract_object : function(object_val, prefix_val) { 

		var len = 0;
		var prefix = '';
		var new_field_name = '';
		var original_field_name = '';
		var new_object_val = {};
		for (var o in object_val) {
			if (o) {
				original_field_name = o.split(/_(.+)/);
				prefix				= original_field_name[0];
				new_field_name		= original_field_name[1];
				if (prefix == prefix_val) {
					new_object_val[new_field_name]	= object_val[o];
				}	
			}
		} 

		return new_object_val;

	},
    set_url : function (ids) {
		
		var q_string = '';
		
		for (var key in ids) {
			var _id = '';
			if (ids[key]) {
				_id = '/' + ids[key];
			}
			var new_key = '/' + key + _id;
			var new_str = q_string + new_key;
			q_string 	= new_str;
		}; 
		 
		return this.host + q_string;
	
	}, 
    stringifyParams : function (params) {
        
        var param_string = '';
        for (var key in params) {
            var _id = '';
            if (params[key] || params[key] == false) {
                _id = key + '=' + params[key];
                var new_key = '&' + _id;
                var new_str = param_string + new_key;
                param_string = new_str;
            }
        };
        
        var new_params = param_string.replace('&', '?');
        return new_params;

    },
	header : function (token) {
		
		if (token) {
			return {
				'x-access-token' : token
			};
		} else {
			return {};
		}

	},
	transform : function (file) {
	
		if (file) 
			return angular.identity;
		else
			return false;
	
	},
	user : function (cookies, state, stateName) { 

		var user = cookies.getObject('user');
		if (user) {
			return user; 
		} else if (stateName === 'client' || 
            stateName === 'admin' || 
            stateName === 'sorter' ) {
		    // do nothing	
		} else {
			state.go('client');
		}

	},
    handlePermission : function (state, role, valid_roles, logger) {
        
        var count = 0;
        for (var i = 0; i < valid_roles.length; i++) {
            count = count + (valid_roles[i] == role) ? 1 : 0;
        };
        if (count === 0) {
            this.handleRedirection(state,role, logger);
            return false;
        } else {
            return true;
        }

    },
    handleRedirection: function (state, role, logger, str) { 

        var sel_state = (role == 'sorter') ? 'app.messengers' : 'app.dashboard';
        if (logger) logger.error(str + ' not found.');
        state.go(sel_state);
    
    },
	parameters : function (params) {
		
		if (params) 
			return params;
		else
			return false;
	
	},
    collectCacheKeys : function (type, url) {
        
        this.appCache[type] = url;

    },
    removeCache : function (cache_key, httpCache) {
        httpCache.remove(this.appCache[cache_key]); 
    },
	clean_data : function (data) {
		
		if (!data) 
			return false;
		else
			return data;
	
	},
	clean_object : function (object) {
		
		for(var key in object) {
			if (!object[key]) {
				delete object[key];
			}
		};
		
		return object; 

	},
	check_file : function (data, callback) { 

		var fd = new FormData();
		if (data.photo || data.license || data.police_clearance || 
			data.accounts || data.nbi_clearance || data.vehicle_photo || 
			data.zones || data.couriers || data.barangays || 
			data.vehicles || data.logo || data.criticalArea || 
			data.bookings || data.file ) {
			for (var key in data) {
				fd.append(key, data[key]);
			};
			callback(fd, true);
		} else {
			callback(data, false);
		}

	},
	groupArray : function (collection, property) {

        var i = 0, val, index, values = [], result = [];
        
        for (; i < collection.length; i++) {
            val = collection[i][property];
            index = values.indexOf(val);
            if (index > -1)
                result[index].push(collection[i]);
            else {
                values.push(val);
                result.push([collection[i]]);
            }
        }
        
        return result;

    },
    nameObject : function (obj, prop, prop2) {
        
        var newObj = [];

        for (var i = 0; i < obj.length; i++) {
            var object = {};
            object.name = obj[i][0][prop] + ' ' + obj[i][0][prop2];
            object.body = obj[i];
            newObj.push(object);
        };

        return newObj;

    },
    setToUpperCase : function (data) { 
    	
    	for (var key in data) {
    		if (key.substr(-2) == 'id' || key == 'email' || key == 'password' || key == 'username' ||
    			typeof(data[key]) === 'number' || !data[key] || 
    			typeof(data[key]) === 'object' || data[key] === true) {
    			// do nothing 
    		} else { 
    			data[key] = data[key].toUpperCase();
    		}
    	}
    	return data;

    },
    refineCoordinates : function (coords, reso) { 

    	var fineIdx  = 0;
        var fineData = [];
        var distanceDiff;
        var latLngA;
        var latLngB;
        var steps;
        var step;
        fineData[0] = [];
        
        for (var i = 1; i < coords.length; i++) {
            latLngA = coords[i - 1];
            latLngB = coords[i];
            latLngA = new google.maps.LatLng(coords[i - 1][0],coords[i - 1][1]);
            latLngB = new google.maps.LatLng(coords[i][0],coords[i][1]);
            distanceDiff = google.maps.geometry.spherical.computeDistanceBetween(latLngA, latLngB);
            steps = Math.ceil(distanceDiff / reso);
            step = 1 / steps;
            var previousInterpolatedLatLng = latLngA;
            for (var j = 0; j < steps; j++) {
                var interpolated = google.maps.geometry.spherical.interpolate(latLngA, latLngB, step * j);
                if (fineData[fineIdx].length !== 0 && fineData[fineIdx].length % 100 === 0) {
                    fineIdx++;
                    fineData[fineIdx] = [];
                }
                fineData[fineIdx].push([interpolated.lat(), interpolated.lng()]);
            }

        }

        return fineData;

    },
    computeDistanceTime : function (origin, destination, callback) {

    	var service = new google.maps.DistanceMatrixService;

    	service.getDistanceMatrix({
          	origins 		: [origin],
          	destinations 	: [destination],
          	travelMode 		: 'DRIVING',
          	unitSystem 		: google.maps.UnitSystem.METRIC,
          	avoidHighways 	: false,
          	avoidTolls 		: false
        }, function (response, status) {
          	if (status !== 'OK') {
            	callback(true, status);
          	} else { 
            	callback(false, response); 
	        }
        });

    },
    generateChartBar : function (data, suffix) {
        
    	var dates 		= [];

    	var gen_color 	= (suffix == 'FAILED') ? 'rgba(255, 0, 0, 0.7)' : 'rgba(76, 175, 80, 0.7)';
        var hover_color = (suffix == 'FAILED') ? 'rgba(255, 0, 0, 1)' : 'rgba(76, 175, 80, 1)';
    	var label 		= (suffix == 'FAILED') ? 'Failed Transactions' : 
    					  (suffix == 'SUCCESS') ? 'Successful Transactions' : 'My Data List';

    	for (var i = 0; i < this.calendar.length; i++) {
    		data[this.calendar[i]+'-'+suffix] = data[this.calendar[i]+'-'+suffix] || 0;
    		dates.push(data[this.calendar[i]+'-'+suffix]);
    	}; 

        return {
            label: label,
            fill: false,
            lineTension: 0.1,
            backgroundColor: gen_color,
            borderColor: gen_color,
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: gen_color,
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: hover_color,
            hoverBackgroundColor: hover_color,
            pointHoverBorderColor: "#fff",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: dates,
            spanGaps: false,
        }

    }
    
};
