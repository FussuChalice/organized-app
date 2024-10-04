export const TABLE_ENCRYPTION_MAP = {
  persons: {
    _deleted: 'shared',
    person_uid: 'public',
    person_firstname: 'shared',
    person_lastname: 'shared',
    person_display_name: 'shared',
    male: 'shared',
    female: 'shared',
    birth_date: 'private',
    assignments: 'shared',
    timeAway: 'shared',
    archived: 'shared',
    disqualified: 'private',
    email: 'shared',
    address: 'shared',
    phone: 'shared',
    publisher_baptized: 'shared',
    publisher_unbaptized: 'shared',
    midweek_meeting_student: 'shared',
    privileges: 'shared',
    enrollments: 'shared',
    emergency_contacts: 'shared',
  },
  app_settings: {
    country_code: 'public',
    cong_number: 'public',
    cong_name: 'public',
    cong_master_key: 'private',
    cong_access_code: 'shared',
    cong_location: 'public',
    cong_new: 'public',
    cong_circuit: 'public',
    cong_discoverable: 'public',
    fullname_option: 'shared',
    short_date_format: 'shared',
    display_name_enabled: 'shared',
    schedule_exact_date_enabled: 'shared',
    time_away_public: 'shared',
    source_material_auto_import: 'shared',
    special_months: 'shared',
    type: 'public',
    weekday: 'public',
    time: 'public',
    class_count: 'shared',
    opening_prayer_auto_assigned: 'shared',
    closing_prayer_auto_assigned: 'shared',
    aux_class_counselor_default: 'shared',
    substitute_speaker_enabled: 'shared',
    w_study_conductor_default: 'shared',
    substitute_w_study_conductor_displayed: 'shared',
    consecutive_monthly_parts_notice_shown: 'shared',
    outgoing_talks_schedule_public: 'shared',
    circuit_overseer: 'shared',
    language_groups: 'shared',
    format_24h_enabled: 'shared',
    week_start_sunday: 'shared',
    attendance_online_record: 'shared',
    data_sync: 'public',
    responsabilities: 'shared',
    cong_role: 'public',
    account_type: 'public',
    user_local_uid: 'public',
    user_members_delegate: 'public',
    firstname: 'public',
    lastname: 'public',
    backup_automatic: 'shared',
    theme_follow_os_enabled: 'shared',
    hour_credits_enabled: 'shared',
    data_view: 'shared',
  },
  speakers_congregations: {
    _deleted: 'private',
    id: 'private',
    cong_data: 'private',
  },
  visiting_speakers: {
    person_uid: 'private',
    _deleted: 'private',
    speaker_data: 'private',
  },
  applications: {
    continuous: 'shared',
    months: 'shared',
    submitted: 'shared',
    status: 'shared',
    coordinator: 'shared',
    secretary: 'shared',
    service: 'shared',
    notified: 'shared',
  },
};
