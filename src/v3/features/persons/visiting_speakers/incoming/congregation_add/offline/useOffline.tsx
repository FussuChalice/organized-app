import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { isOnlineState } from '@states/app';
import { congNumberState, countryCodeState } from '@states/settings';
import { CongregationResponseType, IncomingCongregationResponseType } from '@definition/api';
import { removeSecondsFromTime } from '@utils/dev';

const useOffline = (onCongregationChange: (value: IncomingCongregationResponseType) => void) => {
  const isOnline = useRecoilValue(isOnlineState);
  const countryCode = useRecoilValue(countryCodeState);
  const congNumber = useRecoilValue(congNumberState);

  const [congNameTmp, setCongNameTmp] = useState('');
  const [congNumberTmp, setCongNumberTmp] = useState('');
  const [congCircuitTmp, setCongCircuitTmp] = useState('');

  const handleSelectCongregation = (value: CongregationResponseType) => {
    if (value === null) {
      onCongregationChange(null);
      return;
    }

    const obj: IncomingCongregationResponseType = {
      cong_circuit: value.circuit,
      cong_location: { address: value.address, ...value.location },
      cong_name: value.congName,
      cong_number: value.congNumber,
      country_code: countryCode,
      midweek_meeting: {
        weekday: value.midweekMeetingTime.weekday,
        time: removeSecondsFromTime(value.midweekMeetingTime.time),
      },
      weekend_meeting: {
        weekday: value.weekendMeetingTime.weekday,
        time: removeSecondsFromTime(value.weekendMeetingTime.time),
      },
    };

    onCongregationChange(obj);
  };

  const handleCongNameChange = (value: string) => setCongNameTmp(value);

  const handleCongNumberChange = (value: string) => setCongNumberTmp(value);

  const handleCongCircuitChange = (value: string) => setCongCircuitTmp(value);

  useEffect(() => {
    if (!isOnline) {
      if (congNameTmp.length > 0 && congNumberTmp.length > 0 && congCircuitTmp.length > 0) {
        const dataCong: IncomingCongregationResponseType = {
          cong_name: congNameTmp,
          cong_number: congNumberTmp,
          country_code: '',
          cong_circuit: congCircuitTmp,
          cong_location: { address: '', lat: 0, lng: 0 },
          midweek_meeting: { weekday: 2, time: '18:00:00' },
          weekend_meeting: { weekday: 7, time: '9:00:00' },
        };

        onCongregationChange(dataCong);
      } else {
        onCongregationChange(null);
      }
    }
  }, [congNameTmp, congNumberTmp, congCircuitTmp, onCongregationChange, isOnline]);

  return {
    isOnline,
    countryCode,
    handleSelectCongregation,
    congNumber,
    handleCongNameChange,
    handleCongNumberChange,
    handleCongCircuitChange,
    congNameTmp,
    congNumberTmp,
    congCircuitTmp,
  };
};

export default useOffline;
