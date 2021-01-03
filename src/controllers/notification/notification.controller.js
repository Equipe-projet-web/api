import {Notification} from '../../models';
import {successResponse, errorResponse, uniqueId} from '../../helpers';

export const allNotifications = async (req, res) => {
  try {
    const notifications = await Notification.findAll({
      order: [['createdAt', 'DESC']],
    });
    return successResponse(req, res, { notifications });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const storeNotification = async (req, res) => {
  try {
    const {
      email
    } = req.body;

    const payload = {
      email
    };

    const notification = await Notification.create(payload);
    return successResponse(req, res, {notification});
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
