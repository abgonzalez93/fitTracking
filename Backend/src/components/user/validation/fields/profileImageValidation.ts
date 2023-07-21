import Joi from 'joi';
import messages from '../../../../config/i18n/en/messages';

const msg = messages.src.components.user.validation.profileImageValidation;

export const profileImageValidation = Joi.string().optional();