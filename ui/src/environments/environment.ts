// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
	production: true,
    10001:{
    	api_url: 'http://13.230.73.221:8081',
		bank_name: 'HSBC'
    },
	10002:{
    	api_url: 'http://13.230.73.221:8082',
		bank_name: 'CitiBank'
    }

};

/*
 * 8080 is for ui.
 * 8081 is for HSBC, aka davidchen.
 * 8082 is for Citibank, aka zachlin.
 
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode becau/se it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
