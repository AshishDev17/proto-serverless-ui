export const healthReport = [
    {
        "serviceName": "DS Service Center",
        "status": "UP",
        "components": {
            "db": {
                "status": "UP",
                "details": {
                    "database": "Oracle",
                    "result": "Hello",
                    "validationQuery": "SELECT 'Hello' from DUAL"
                }
            },
            "discoveryComposite": {
                "status": "UP",
                "components": {
                    "discoveryClient": {
                        "status": "UP",
                        "details": {
                            "services": [
                                "syc-api",
                                "featureconfig",
                                "vip-saves",
                                "adbuildermedia",
                                "vip-deletes",
                                "ownerproduct",
                                "salesforce-integration",
                                "vehicle-event-audit",
                                "searchoptions",
                                "coop",
                                "customers",
                                "esb",
                                "dealersite-servicecenter",
                                "eventhandlers",
                                "gbm-config-server",
                                "atc-ice-audit",
                                "thirdpartyserviceproxy",
                                "search",
                                "dealersite-bridge",
                                "dealerchat",
                                "eureka",
                                "inventorybatch",
                                "zuul",
                                "provisioning"
                            ]
                        }
                    },
                    "eureka": {
                        "description": "Remote status from Eureka server",
                        "status": "UP",
                        "details": {
                            "applications": {
                                "SYC-API": 1,
                                "FEATURECONFIG": 2,
                                "GBM-CONFIG-SERVER": 1,
                                "ATC-ICE-AUDIT": 2,
                                "THIRDPARTYSERVICEPROXY": 1,
                                "SEARCH": 1,
                                "VIP-SAVES": 2,
                                "DEALERSITE-BRIDGE": 1,
                                "ADBUILDERMEDIA": 1,
                                "VIP-DELETES": 1,
                                "OWNERPRODUCT": 1,
                                "DEALERCHAT": 2,
                                "EUREKA": 2,
                                "SALESFORCE-INTEGRATION": 2,
                                "VEHICLE-EVENT-AUDIT": 1,
                                "SEARCHOPTIONS": 1,
                                "COOP": 1,
                                "CUSTOMERS": 3,
                                "INVENTORYBATCH": 1,
                                "ESB": 1,
                                "ZUUL": 2,
                                "PROVISIONING": 1,
                                "DEALERSITE-SERVICECENTER": 1,
                                "EVENTHANDLERS": 3
                            }
                        }
                    }
                }
            },
            "diskSpace": {
                "status": "UP",
                "details": {
                    "total": 21464350720,
                    "free": 17022984192,
                    "threshold": 10485760
                }
            },
            "hystrix": {
                "status": "UP"
            },
            "ping": {
                "status": "UP"
            },
            "refreshScope": {
                "status": "UP"
            }
        }
    }    
];