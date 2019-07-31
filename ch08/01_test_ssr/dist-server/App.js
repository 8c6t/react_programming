"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Home = _interopRequireDefault(require("./Home"));

var _About = _interopRequireDefault(require("./About"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const App = ({
  page: indexPage
}) => {
  const [page, setPage] = (0, _react.useState)(indexPage);
  (0, _react.useEffect)(() => {
    window.onpopstate = event => {
      setPage(event.state);
    };
  }, []);

  const onChangePage = e => {
    const page = e.target.dataset.page;
    window.history.pushState(page, '', `/${page}`);
    setPage(page);
  };

  const PageComponent = page === 'home' ? _Home.default : _About.default;
  return _react.default.createElement("div", {
    className: "container"
  }, _react.default.createElement("button", {
    "data-page": "home",
    onClick: onChangePage
  }, "Home"), _react.default.createElement("button", {
    "data-page": "about",
    onClick: onChangePage
  }, "About"), _react.default.createElement(PageComponent, null));
};

var _default = App;
exports.default = _default;