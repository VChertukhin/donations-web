import { r as react } from '../common/index-f6a4afc8.js';
import { b as browserSprite$1, e as es6ObjectAssign, a as browserSymbol } from '../common/browser-sprite-1f8b4710.js';

// @ts-ignore
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
var browserSprite;

if (canUseDOM) {
  var spriteId = '__SVG_SPRITE_NODE__';
  browserSprite = new browserSprite$1({
    attrs: {
      id: spriteId
    }
  });

  var mount = function mount() {
    var spriteNode = document.getElementById(spriteId);

    if (spriteNode) {
      browserSprite.attach(spriteNode);
    } else {
      browserSprite.mount();
    }
  };

  if (document.querySelector('body')) {
    mount();
  } else {
    document.addEventListener('DOMContentLoaded', mount);
  }
} else {
  browserSprite = null;
}

function addSpriteSymbol(symbol) {
  if (browserSprite) {
    browserSprite.add(symbol);
  }
}
var useIsomorphicLayoutEffect = canUseDOM ? react.useLayoutEffect : react.useEffect;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var svgStyle = {
  display: 'block'
};
var SvgIcon = function SvgIcon(_ref) {
  var width = _ref.width,
      height = _ref.height,
      viewBox = _ref.viewBox,
      id = _ref.id,
      className = _ref.className,
      style = _ref.style,
      fill = _ref.fill,
      getRootRef = _ref.getRootRef,
      restProps = _objectWithoutProperties(_ref, ["width", "height", "viewBox", "id", "className", "style", "fill", "getRootRef"]);

  var size = Math.max(width, height);
  return /*#__PURE__*/react.createElement("div", _extends({}, restProps, {
    ref: getRootRef,
    className: "Icon Icon--".concat(size, " Icon--w-").concat(width, " Icon--h-").concat(height, " Icon--").concat(id, " ").concat(className),
    style: _objectSpread({}, style, {
      width: width,
      height: height
    })
  }), /*#__PURE__*/react.createElement("svg", {
    viewBox: viewBox,
    width: width,
    height: height,
    style: svgStyle
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#".concat(id),
    style: {
      fill: 'currentColor',
      color: fill
    }
  })));
};
SvgIcon.defaultProps = {
  className: '',
  style: {}
};

var viewBox = '0 0 24 24';
var id = 'cancel_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="cancel_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M18.3 5.7a.99.99 0 00-1.4 0L12 10.6 7.1 5.7a.99.99 0 00-1.4 1.4l4.9 4.9-4.9 4.9a.99.99 0 001.4 1.4l4.9-4.9 4.9 4.9a.99.99 0 001.4-1.4L13.4 12l4.9-4.9a.99.99 0 000-1.4z" fill="currentColor" /></g></symbol>';
var isMounted = false;

function mountIcon() {
  if (!isMounted) {
    addSpriteSymbol(new browserSymbol({
      id: id,
      viewBox: viewBox,
      content: content
    }));
    isMounted = true;
  }
}

var Icon24Cancel = function Icon24Cancel(props) {
  useIsomorphicLayoutEffect(function () {
    mountIcon();
  }, []);
  return react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox,
    id: id,
    width: !isNaN(props.width) ? +props.width : 24,
    height: !isNaN(props.height) ? +props.height : 24
  }));
};

Icon24Cancel.mountIcon = mountIcon;

var viewBox$1 = '0 0 24 24';
var id$1 = 'dismiss_overlay_24';
var content$1 = '<symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="dismiss_overlay_24"><path d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11z" fill="#99a2ad" stroke="#fff" stroke-width="2" /><path d="M16.736 7.264a.9.9 0 010 1.272L13.273 12l3.463 3.464a.9.9 0 01.08 1.18l-.08.092a.9.9 0 01-1.272 0L12 13.273l-3.464 3.463a.9.9 0 11-1.272-1.272L10.727 12 7.264 8.536a.9.9 0 01-.08-1.18l.08-.092a.9.9 0 011.272 0L12 10.727l3.464-3.463a.9.9 0 011.272 0z" fill="#fff" /></symbol>';
var isMounted$1 = false;

function mountIcon$1() {
  if (!isMounted$1) {
    addSpriteSymbol(new browserSymbol({
      id: id$1,
      viewBox: viewBox$1,
      content: content$1
    }));
    isMounted$1 = true;
  }
}

var Icon24DismissOverlay = function Icon24DismissOverlay(props) {
  useIsomorphicLayoutEffect(function () {
    mountIcon$1();
  }, []);
  return react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox$1,
    id: id$1,
    width: !isNaN(props.width) ? +props.width : 24,
    height: !isNaN(props.height) ? +props.height : 24
  }));
};

Icon24DismissOverlay.mountIcon = mountIcon$1;

var viewBox$2 = '0 0 24 24';
var id$2 = 'done_24';
var content$2 = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="done_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M9 16.2l-3.5-3.5a.99.99 0 10-1.4 1.4l4.193 4.193a1 1 0 001.414 0L20.3 7.7a.99.99 0 00-1.4-1.4L9 16.2z" fill="currentColor" /></g></symbol>';
var isMounted$2 = false;

function mountIcon$2() {
  if (!isMounted$2) {
    addSpriteSymbol(new browserSymbol({
      id: id$2,
      viewBox: viewBox$2,
      content: content$2
    }));
    isMounted$2 = true;
  }
}

var Icon24Done = function Icon24Done(props) {
  useIsomorphicLayoutEffect(function () {
    mountIcon$2();
  }, []);
  return react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox$2,
    id: id$2,
    width: !isNaN(props.width) ? +props.width : 24,
    height: !isNaN(props.height) ? +props.height : 24
  }));
};

Icon24Done.mountIcon = mountIcon$2;

var viewBox$3 = '0 0 28 28';
var id$3 = 'calendar_outline_28';
var content$3 = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="calendar_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M19 1a1 1 0 011 1v1.16c.84.133 1.384.35 1.93.641A5.452 5.452 0 0124.2 6.07c.475.889.748 1.77.794 3.93L25 10v7.308l-.005.61c-.041 2.22-.315 3.113-.796 4.013a5.452 5.452 0 01-2.268 2.268c-.978.523-1.948.801-4.623.801h-6.616l-.61-.005c-2.22-.041-3.113-.315-4.013-.796a5.452 5.452 0 01-2.268-2.268c-.502-.94-.778-1.87-.8-4.31L3 10.691V10c.053-2.16.326-3.042.801-3.93A5.452 5.452 0 016.07 3.8 5.679 5.679 0 018 3.16V2a1 1 0 112 0v1.007c.217-.005.447-.007.692-.007h6.616c.245 0 .476.002.694.007L18 2a1 1 0 011-1zm3.999 11H5v5.591l.01.57c.039 1.506.198 2.159.555 2.826.337.63.818 1.111 1.448 1.448.746.4 1.473.551 3.396.564h7.182l.57-.009c1.506-.039 2.159-.198 2.826-.555a3.453 3.453 0 001.448-1.448c.4-.746.551-1.473.564-3.396V12zm-3.953 5c.433 0 .774.081 1.059.234.285.152.509.376.661.661.153.285.234.626.234 1.059v.092c0 .433-.081.774-.234 1.059a1.59 1.59 0 01-.661.661c-.285.153-.626.234-1.059.234h-.092c-.433 0-.774-.081-1.059-.234a1.59 1.59 0 01-.661-.661c-.153-.285-.234-.626-.234-1.059v-.092c0-.433.081-.774.234-1.059a1.59 1.59 0 01.661-.661c.285-.153.626-.234 1.059-.234h.092zM17.591 5H10.41L10 5.007V6a1 1 0 11-2 0v-.807c-.381.087-.683.21-.987.372a3.453 3.453 0 00-1.448 1.448c-.37.69-.527 1.365-.559 2.986L22.993 10l-.003-.16c-.039-1.507-.198-2.16-.555-2.827a3.453 3.453 0 00-1.448-1.448 3.835 3.835 0 00-.986-.372L20 6a1 1 0 01-2 0l.002-.994-.41-.005z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';
var isMounted$3 = false;

function mountIcon$3() {
  if (!isMounted$3) {
    addSpriteSymbol(new browserSymbol({
      id: id$3,
      viewBox: viewBox$3,
      content: content$3
    }));
    isMounted$3 = true;
  }
}

var Icon28CalendarOutline = function Icon28CalendarOutline(props) {
  useIsomorphicLayoutEffect(function () {
    mountIcon$3();
  }, []);
  return react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox$3,
    id: id$3,
    width: !isNaN(props.width) ? +props.width : 28,
    height: !isNaN(props.height) ? +props.height : 28
  }));
};

Icon28CalendarOutline.mountIcon = mountIcon$3;

var viewBox$4 = '0 0 28 28';
var id$4 = 'picture_outline_28';
var content$4 = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="picture_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M16.308 3c2.59 0 3.818.237 5.094.92a6.452 6.452 0 012.678 2.678c.683 1.276.92 2.504.92 5.094v4.616c0 2.59-.237 3.818-.92 5.094a6.452 6.452 0 01-2.678 2.678c-1.276.683-2.504.92-5.094.92h-4.616c-2.59 0-3.818-.237-5.094-.92a6.452 6.452 0 01-2.678-2.678C3.237 20.126 3 18.898 3 16.308v-4.616c0-2.59.237-3.818.92-5.094A6.452 6.452 0 016.598 3.92C7.874 3.237 9.102 3 11.692 3h4.616zm1.671 12.442l-4.202 5.187a1 1 0 01-1.417.14l-2.299-1.916-3.098 3.099c.181.134.374.256.578.365.947.506 1.863.683 4.15.683h4.617c2.288 0 3.204-.177 4.15-.683a4.452 4.452 0 001.859-1.858c.147-.275.266-.547.361-.85l-4.699-4.167zM16.31 5h-4.617c-2.288 0-3.204.177-4.15.683a4.452 4.452 0 00-1.859 1.858C5.177 8.488 5 9.404 5 11.691v4.617c0 2.257.172 3.18.663 4.113l3.63-3.628a1 1 0 011.347-.061l2.221 1.85 4.222-5.211a1 1 0 011.44-.12l4.466 3.96c.007-.276.011-.575.011-.903v-4.616c0-2.288-.177-3.204-.683-4.15a4.452 4.452 0 00-1.858-1.859C19.512 5.177 18.596 5 16.309 5zM10.5 9a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';
var isMounted$4 = false;

function mountIcon$4() {
  if (!isMounted$4) {
    addSpriteSymbol(new browserSymbol({
      id: id$4,
      viewBox: viewBox$4,
      content: content$4
    }));
    isMounted$4 = true;
  }
}

var Icon28PictureOutline = function Icon28PictureOutline(props) {
  useIsomorphicLayoutEffect(function () {
    mountIcon$4();
  }, []);
  return react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox$4,
    id: id$4,
    width: !isNaN(props.width) ? +props.width : 28,
    height: !isNaN(props.height) ? +props.height : 28
  }));
};

Icon28PictureOutline.mountIcon = mountIcon$4;

var viewBox$5 = '0 0 28 28';
var id$5 = 'target_outline_28';
var content$5 = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="target_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M14 2a1 1 0 011 1l.001 1.05c4.724.469 8.48 4.226 8.95 8.95H25a1 1 0 010 2l-1.05.001a10.003 10.003 0 01-8.949 8.95L15 25a1 1 0 01-2 0v-1.05a10.003 10.003 0 01-8.95-8.949L3 15a1 1 0 010-2h1.05A10.003 10.003 0 0113 4.05V3a1 1 0 011-1zm1.001 4.062L15 7a1 1 0 01-2 0v-.938A8.004 8.004 0 006.062 13H7a1 1 0 010 2l-.938.001A8.004 8.004 0 0013 21.938V21a1 1 0 012 0l.001.938a8.004 8.004 0 006.937-6.937L21 15a1 1 0 010-2h.938a8.004 8.004 0 00-6.937-6.938zM14 12a2 2 0 110 4 2 2 0 010-4z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';
var isMounted$5 = false;

function mountIcon$5() {
  if (!isMounted$5) {
    addSpriteSymbol(new browserSymbol({
      id: id$5,
      viewBox: viewBox$5,
      content: content$5
    }));
    isMounted$5 = true;
  }
}

var Icon28TargetOutline = function Icon28TargetOutline(props) {
  useIsomorphicLayoutEffect(function () {
    mountIcon$5();
  }, []);
  return react.createElement(SvgIcon, es6ObjectAssign.assign({}, props, {
    viewBox: viewBox$5,
    id: id$5,
    width: !isNaN(props.width) ? +props.width : 28,
    height: !isNaN(props.height) ? +props.height : 28
  }));
};

Icon28TargetOutline.mountIcon = mountIcon$5;

export { Icon24Cancel, Icon24DismissOverlay, Icon24Done, Icon28CalendarOutline, Icon28PictureOutline, Icon28TargetOutline };
