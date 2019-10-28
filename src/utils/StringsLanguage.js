import React from 'react';
import LocalizedStrings from 'react-native-localization';

const strings = new LocalizedStrings({
    'es-co': {

        //Loading view
        loading_text: "Cargando...",

        //Validate Code View
        validate: "Validar",
        title_error_validation: "Código no válido",
        content_error_validation: "Por favor verifica que el código sea exactamente igual al compartido",
        accept_error_validation: "Aceptar",
        code_validate_button: "Validar",
        label_code_validate: "Validando código...",
        label_instructions: "Ingresa el código de invitación",

        //Camera View
        title_toolbar_section_camera: "Camara",
        take_photo_button: "Tomar foto",

        //Cartoon View
        title_section_cartoon: "Historia gráfica",
        go_to_form_evidence: "Ir",

        //Evidence (Mission) View
        title_section_evidence: "Evidencia Misión",
        evidence_placeholder_description: "Descripción de la evidencia",
        send_evidence_button: "Enviar",
        send_evidence_success: "Evidencia almacenada con éxito!",
        send_evidence_error: "Ha ocurrido un error al almacenar la evidencia, inténtalo de nuevo",
        back_to_campaign_button: "Regresar",

        //Campaign Detail View
        subtitle_section_campaign: "Misiones",

        //Campaign List View
        title_section_campaign_list: "Campañas",

        //Profile View
        view_missions_button: "Ver misiones",

        //Settings View
        title_section_settings: "Configuración",
        option_english_language: "Inglés",
        option_spanish_language: "Español",
        invite_button: "Invitar a mis amigos",
        back_button: "Regresar",

        //Invitation code
        title_popup_share: "Código de invitación",
        message_popup_share: "Invita a tus amigos a vivir una gran experiencia con Evoke",
        button_popup_share: "Compartir",
        button_cancel_popup_share: "Cancelar",
        message_share_code: "Evoke | Este es el código de invitación para unirte a Evoke:",

    },
    'en-us':{

        //Loading view
        loading_text: "Loading...",

        //Validate Code View
        validate: "Validate",
        title_error_validation: "Invalid code",
        content_error_validation: "Please verify that the code is exactly the same as the shared",
        accept_error_validation: "Accept",
        code_validate_button: "Validate",
        label_code_validate: "Validating code...",
        label_instructions: "Enter the invitation code",

        //Camera View
        title_toolbar_section_camera: "Camera",
        take_photo_button: "Take photo",

        //Cartoon View
        title_section_cartoon: "Graphic hitory",
        go_to_form_evidence: "Go",

        //Evidence (Mission) View
        title_section_evidence: "Mission Evidence",
        evidence_placeholder_description: "Evidence description",
        send_evidence_button: "Send",
        send_evidence_success: "Evidence stored successfully!",
        send_evidence_error: "An error occurred while storing the evidence, try again",
        back_to_campaign_button: "Go back",

        //Campaign Detail View
        subtitle_section_campaign: "Missions",

        //Campaign List View
        title_section_campaign_list: "Campaigns",

        //Profile View
        view_missions_button: "View missions",

        //Settings View
        title_section_settings: "Configuration",
        option_english_language: "English",
        option_spanish_language: "Spanish",
        invite_button: "Invite my friends",
        back_button: "Go back",

        title_popup_share: "Invitation Code",
        message_popup_share: "Invite your friends to live a great experience with Evoke",
        button_popup_share: "Share",
        button_cancel_popup_share: "Cancel",
        message_share_code: "Evoke | This is the invitation code to join Evoke:",
    }
});

export default strings;
