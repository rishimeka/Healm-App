import { useEffect, useState } from 'react';
import AppleHealthKit, {
    HealthInputOptions,
    HealthKitPermissions,
    HealthUnit,
} from "react-native-health";
import {Platform} from "react-native";

const { Permissions } = AppleHealthKit.Constants;

const permissions: HealthKitPermissions = {
    permissions: {
        read: [
            Permissions.Steps,
            Permissions.FlightsClimbed,
            Permissions.DistanceWalkingRunning,
            Permissions.HeartRate
        ],
        write: [],
    },
};

const useHealthData = () => {
    const [hasPermissions, setHasPermission] = useState(false);

    useEffect(() => {
        if (Platform.OS !== 'ios' || hasPermissions) {
            return;
        }
        AppleHealthKit.initHealthKit(permissions, (err) => {
            if (err) {
                console.log('Error getting permissions');
                return;
            }
            setHasPermission(true);
            const options: HealthInputOptions = {
                startDate: (new Date(2016,1,1)).toISOString() // required
            };

            AppleHealthKit.getDailyStepCountSamples(
                (options),
                (err: Object, results: Array<Object>) => {
                    if (err) {
                        console.log(err)
                        return
                    }
                    console.log(results)
                },
            )

        });
    }, [hasPermissions]);


    const [steps, setSteps]:any = useState(0);
    const [flights, setFlights] = useState(0);
    const [distance, setDistance] = useState(0);

    // HealthKit implementation

    return { steps, flights, distance };
};

export default useHealthData;
