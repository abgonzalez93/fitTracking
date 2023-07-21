import Joi from 'joi';
import messages from '../../../../config/i18n/messages/messages';

const msg = messages.src.components.user.validation.profileImageValidation;

export const profileImageValidation = Joi.string().optional();