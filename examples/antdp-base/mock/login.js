const menus = [
  '/',
  '/welcome',
  '/chart',
  '/dashboard',
  '/components',
  '/components/quickform',
  '/components/formdetail',
  '/components/edittable',
  '/list',
  '/list/basiclist',
  '/list/cardlist',
  '/list/tablelist',
  '/detail',
  '/detail/basicdetails',
  '/detail/advanceddetails',
  '/results',
  '/results/success',
  '/results/fail',
  '/person',
  '/person/personalCenter',
  '/person/personalSettings',
  '/404',
  '/403',
];
const btns = ['/demo/add1', '/demo/add2', '/demo/add3'];

export default {
  'POST /api/users/login': (req, res) => {
    const { username, password, phone, code, type } = req.body;
    if ((username === 'admin' && password === 'admin') || (code && phone)) {
      res.send({
        code: 1,
        message: '登录成功！',
        data: {
          type,
          menus,
          btns,
        },
        token: '3096208b45df735aeebf072e90a4',
      });
      return;
    }
    res.send({
      code: -1,
      message: '登录失败！',
      data: {
        type,
      },
      token: null,
    });
  },
};
