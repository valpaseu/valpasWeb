export const eng = {
  name: "English",
  main: {
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    lang_select: "Select language",
    landingpage: {
      register: "Register",
      login: "Login",
    },
    confirm: {
      is_required: "Confirmation code is required",
      title: "Confirm Sign up",
      code: "Confirmation code",
      confirm: "Confirm",
      confirming: "Confirming...",
    },
    profile: {
      title: "Profile",
      details: {
        details: "Details",
        name: "Name",
        email: "Email",
        phone: "Phone number",
        idnumber: "ID number",
        iban: "IBAN",
        city: "City",
        birthdate: "Birthdate",
        nationality: "Nationality",
      },
      cards: {
        add: "Add card",
        close: "Close",
        cards: "Cards",
        cardtype: "Type",
        cardend: "Valid until",
        cardimage: "Image",
        uploadcard: "Save",
        uploadcardinfo: "Upload card image",
        download: "Download image",
        delete: "Delete image",
        category: "Category",
        owncar: "Own car available",
        types: {
          id: "ID card",
          driving: "Driving license",
          passport: "Passport",
          workcard: "Work card",
          hygienepass: "Hygiene pass",
          worksafetypass: "Work safety pass",
          fireworkcard: "Firework card",
          electricalsafetypass: "Electrical safety pass",
          other: "Other",
        },
      },
    },
    register: {
      title: "Join Valpas NextApp",
      first_name: "First Name",
      last_name: "Last Name",
      citizenship: "Citizenship",
      email: "Email",
      phone_number: "Phone Number",
      password: "Password",
      password_confirmation: "Confirm Password",
      agree: "I agree to Valpas NextApp's Terms of Service",
      register: "Register",
      date_of_birth: "Date of Birth",
      errors: {
        email_already_exists: "Email is already in use",
        phone_number: {
          is_too_long: "Phone number is too long",
          is_too_short: "Phone number is too short",
          is_required: "Phone number is required",
          is_invalid: "Phone number is invalid",
        },
        invalid_email: "Email is invalid",
        email_is_required: "Email is required",
        last_name: {
          is_required: "Last name is required",
          is_too_short: "Last name is too short",
          is_too_long: "Last name is too long",
        },
        first_name: {
          is_required: "First name is required",
          is_too_short: "First name is too short",
          is_too_long: "First name is too long",
        },
        password: {
          is_required: "Password is required",
          is_too_short: "Password is too short",
          is_too_long: "Password is too long",
        },
        password_confirmation: {
          is_required: "Password confirmation is required",
          is_too_short: "Password confirmation is too short",
          is_too_long: "Password confirmation is too long",
          does_not_match: "Password confirmation does not match",
        },
      },
    },
    login: {
      title: "Login to Valpas NextApp",
      email: "Email",
      password: "Password",
      login: "Login",
      logging_in: "Logging in...",
      forgot_password: "Forgot Password?",
      register: "Sign up",
      errors: {
        invalid_email: "Email is invalid",
        email_is_required: "Email is required",
        password_is_required: "Password is required",
      },
    },
    forgot_password: {
      title: "Forgot Password",
      form_title: "New Password",
      email: "Email",
      code: "Code",
      password: "Password",
      password_confirmation: "Confirm password",
      change_password: "Change password",
      changing_password: "Changing password...",
      send: "Send reset code",
      sending: "Sending reset code...",
      have_code: "I already have a reset code",
      errors: {
        invalid_email: "Email is invalid",
        email_is_required: "Email is required",
        code_is_too_long: "Code is too long",
        password_is_too_long: "Password is too long",
        password_is_too_short: "Password is too short",
        password_is_required: "Password is required",
        code_is_required: "Code is required",
        confirmation_code_does_not_match: "Confirmation code does not match",
        confirmation_code_is_required: "Confirmation code is required",
      },
    },
    reset_password: {
      title: "Reset Password",
      reset_code: "Reset Code",
      password: "Password",
      confirm_password: "Confirm Password",
      reset: "Reset Password",
    },
    sidebar: {
      home: "Home",
      track: "Time tracker",
      project: "Projects",
      analyze: "Analyze",
      reports: "Reports",
      receipts: "Receipts",
      team: "Team",
      admin_panel: "Admin Panel",
      projects: "Projects Admin",
      workers: "Workers",
      workplaces: "Workplaces",
      history: "History",
    },
    track: {
      recorder: {
        tabs: {
          timer: "Timer",
          manual: "Manual",
        },
        timer: {
          description: "Description",
          workplace: "Workplace",
          start: "Start",
          stop: "Stop",
          edit_start: {
            title: "Edit start time",
            start_time: "Start time",
            save: "Save",
            cancel: "Cancel",
          },
        },
        manual: {
          description: "Description",
          workplace: "Workplace",
          date: "Date",
          start_time: "Start time",
          end_time: "End time",
          create: "Create",
        },
      },
      history: {
        week: "Week",
        total_time: "Total time",
        none_description: "No description",
        date: "Date",
        workplace: "Workplace",
        all: "All",
        sent: "Sent",
        confirmed: "Confirmed",
        add_description: "Add description",
        title: {
          this_week: "This week",
          select_workplace: "Select workplace",
          history: "History",
          none_times: "This week you have not tracked any time",
          not_confirmed: "Not confirmed times",
          deleteTitle: "Are you sure you want to delete this entry?",
          deleteAlert: "This entry will be deleted permanently",
        },

        breaks: {
          lunch: "Lunch 30 min",
          lunch_l: "Lunch other",
          short: "Short Break 15 min",
          long: "Long Break 30 min",
          going: "Own dealings",
          accident: "Accident",
        },

        buttons: {
          report: "Report",
          delete: "Delete",
          dublicate: "Dublicate",
          save: "Save",
          cancel: "Cancel",
          send: "Send",
          cancelsend: "Cancel send",
          reportweek: "Report all week",
        },
      },
    },
    reports: {
      title: "Reports",
      workplace: "Workplace",
      worker: "Worker",
      week: "Week",
      total_hours: "Total hours",
      none_description: "No description",
      confirm: "Confirm",
      unconfirm: "Unconfirm",
      sent: "Sent",
      confirmed: "Confirmed",
      alert: {
        title: "Confirm all entries",
        message: "Are you sure you want to confirm all entries?",
        confirm: "Confirm",
        cancel: "Cancel",
      },
      buttons: {
        weekreport: "Confirm",
      },
    },
    workplaces: {
      title: "Workplacess",
      create_workplace: "Create workplace",
      worker_name: "Worker name",
      work_name: "Work name",
      add_work: "Add work",
      email: "Email",
      create_work: {
        title: "Create workplace",
        name: "Name",
        create: "Create",
        cancel: "Cancel",
        errors: {
          is_too_short: "Too short name",
          is_too_long: "Too long name",
          is_required: "Name is required",
        },
      },
      alert_work: {
        min_name: "Name must be at least 3 characters long",
        max_name: "Name can be up to 20 characters long",
        required_name: "Name is required",
        min_description: "Description must be at least 3 characters long",
        max_description: "Description can be up to 20 characters long",
        required_description: "Description is required",
      },
      allert_workplace: {
        title: "Confirm to delete this workplace",
        message: "Are you sure you want to delete",
        confirm: "Confirm",
        cancel: "Cancel",
      },
      allert_worker: {
        title: "Confirm to delete this worker",
        message: "Are you sure you want to delete",
        message2: "from",
        confirm: "Confirm",
        cancel: "Cancel",
      },
      add_user: {
        title: "Add worker",
        email: "Email",
        add: "Add",
        cancel: "Cancel",
        errors: {
          invalid_email: "Email is invalid",
          email_is_required: "Email is required",
        },
      },
      setting: {
        delete: {
          title: "Delete workplace",
          message: "Are you sure you want to delete",
        },
        buttons: {
          delete: "Delete",
          settings: "Settings",
          cancel: "Cancel",
          agree: "Agree",
        },
      },
    },
    receipts: {
      title: "Receipts",
      titlelist: "Receipt list",
      buttons: {
        filter: "Filter",
        add: "Add",
        cancel: "Cancel",
        receipt: "Receipt",
        travel: "Travel",
      },
      addreceipt: {
        title: "Add receipt",
        date: "Date",
        number: "Number",
        amount: "Amount",
        currency: "Currency",
        place: "Place",
        tax: "Tax",
        method: "Method",
        category: "Category",
        comment: "Comment",
        attachments: "Attachments",
        class: "Class",
        carousel: {
          title: "Add attachments",
          buttons: {
            remove: "Remove",
            add: "Add",
          },
        },
        buttons: {
          add: "Add",
          cancel: "Cancel",
          upload: "Upload",
        },
      },
      methodselect: {
        cash: "Cash",
        card: "Card",
        companycard: "Company card",
        transfer: "Transfer",
        other: "Other",
      },
      classes: {
        administrativeservice: "Administrative service",
        itdeviceandsoftwareexpenses: "IT device and software expenses",
        marketingexpenses: "Marketing expenses",
        meetingexpenses: "Meeting expenses",
        premisesexpenses: "Premises expenses",
        travelexpenses: "Travel expenses",
        vehicleexpenses: "Vehicle expenses",
      },
      list: {
        title: "Receipt list",
        buttons: {
          show: "Show",
        },
      },
    },
  },
};
