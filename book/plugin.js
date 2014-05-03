require(["gitbook"], function(gitbook) {
    gitbook.events.bind("start", function(e, config) {
        config.xapi = config.xapi || {};
		ADL.XAPIWrapper.changeConfig(config.xapi.lrs);
    });

    gitbook.events.bind("page.change", function() {
		
		var stmt = {
			"actor": {
				"mbox": "mailto:gitbook-plugin-xapi@adlnet.gov",
				"name": "Gitbook User",
				"objectType": "Agent"
			},
			"verb": {
				"id": "http://adlnet.gov/expapi/verbs/experienced",
				"display": {
					"en-US": "experienced"
				}
			},
			"object": {
				"id": "http://adlnet.gov/xapi/gitbook-plugin-xapi/experienced",
				"objectType": "Activity",
				"definition": {
					"name": {
						"en-US": "xAPI statement from a gitbook"
					},
					"description": {
						"en-US": "experience activity sent from a gitbook"
					}
				}
			}
		};
		ADL.XAPIWrapper.sendStatement(stmt, function(resp, obj) {
			console.log("server response: " + response);
			console.log("object id: " + obj.id);
		});
	});

    gitbook.events.bind("exercise.submit", function(e, data) {
		var stmt = {
			"actor": {
				"mbox": "mailto:gitbook-plugin-xapi@adlnet.gov",
				"name": "Gitbook User",
				"objectType": "Agent"
			},
			"verb": {
				"id": "http://adlnet.gov/expapi/verbs/completed",
				"display": {
					"en-US": "completed"
				}
			},
			"object": {
				"id": "http://adlnet.gov/xapi/gitbook-plugin-xapi/completed",
				"objectType": "Activity",
				"definition": {
					"name": {
						"en-US": "xAPI statement from a gitbook"
					},
					"description": {
						"en-US": "experienced activity sent from a gitbook"
					}
				}
			}
		};
    });
});
