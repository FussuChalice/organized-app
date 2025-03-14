import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: '20px',
    height: '100%',
    width: '100%',
  },
  header: {
    padding: '5px 16px',
    backgroundColor: '#6876BE',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopLeftRadius: '6px',
    borderTopRightRadius: '6px',
  },
  headerTitleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '5px',
  },
  headerTittle: {
    color: '#FEFEFE',
    fontWeight: 'medium',
    fontSize: '14px',
  },
  headerCongregation: {
    color: '#FEFEFE',
    fontWeight: 'medium',
    fontSize: '12px',
  },
  weekContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    borderBottom: '1px solid #D5DFFD',
    borderRight: '1px solid #D5DFFD',
    borderLeft: '1px solid #D5DFFD',
  },
  dateContainer: {
    backgroundColor: '#F2F5FF',
    width: '60px',
    paddingLeft: '4px',
    paddingRight: '4px',
    borderRight: '1px solid #D5DFFD',
    display: 'flex',
    justifyContent: 'center',
    fontWeight: 'semibold',
  },
  dateText: {
    color: '#3B4CA3',
    fontSize: '9px',
    textAlign: 'center',
  },
  meetingPartSection: {
    flex: 1,
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    paddingTop: '8px',
    paddingBottom: '8px',
  },
  meetingPartSectionRow: {
    display: 'flex',
    flexDirection: 'column',
    gap: 0,
  },
  meetingPartContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  meetingPartLabel: {
    width: '90px',
    color: '#757575',
    fontSize: '9px',
  },
  meetingPartName: {
    color: '#222222',
    fontSize: '10px',
    width: '130px',
  },
  lineHorizontal: {
    borderBottom: '1px solid #D5DFFD',
  },
  lineVertical: {
    marginTop: '10px',
    marginBottom: '10px',
    borderLeft: '1px solid #D5DFFD',
  },
  talkContainer: {
    width: '244px',
    marginTop: '10px',
    marginBottom: '10px',
    paddingTop: '8px',
    paddingBottom: '8px',
    paddingRight: '10px',
    display: 'flex',
    justifyContent: 'center',
    gap: '4px',
  },
  talkTitleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '5px',
  },
  circuitOverseerTalkContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3px',
  },
  talkTitle: {
    width: '200px',
    color: '#3B4CA3',
    fontSize: '10px',
    fontWeight: 'semibold',
  },
  talkNumber: {
    color: '#AAAAAA',
    fontSize: '10px',
    fontWeight: 'medium',
  },
  speakerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '16px',
  },
  speaker: {
    fontSize: '10px',
    fontWeight: 'medium',
    color: '#222222',
  },
  speakerCongregation: {
    fontSize: '10px',
    fontWeight: 'light',
    color: '#222222',
  },
  substituteSpeakerContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    padding: '4px 8px',
    gap: '2px',
    backgroundColor: '#F2F5FF',
    borderRadius: '2px',
    flexWrap: 'wrap',
  },
  labelDefault: {
    fontSize: '8px',
    fontWeight: 'light',
    color: '#222222',
  },
  substituteName: {
    fontSize: '8px',
    fontWeight: 'medium',
    color: '#222222',
  },
});

export default styles;
