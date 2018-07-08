/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AbstractView = exports.AbstractView = function () {
  function AbstractView() {
    _classCallCheck(this, AbstractView);
  }

  _createClass(AbstractView, [{
    key: "render",
    value: function render(template) {
      var container = document.createElement("template");
      // const main = document.querySelector(`.central`);
      container.innerHTML = template;
      return container.content;
    }
  }, {
    key: "bind",
    value: function bind() {
      // метод, который будет добавлять обработчики событий
    }
  }, {
    key: "template",
    get: function get() {
      // возвращает строку, содержащую разметку. Должен быть переопределен
      throw new Error("Must be overload!");
    }
  }, {
    key: "element",
    get: function get() {
      this._element = this.render(this.template);
      this.bind();
      return this._element;
    }
  }]);

  return AbstractView;
}();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AbstractPresenter = function () {
  function AbstractPresenter(view) {
    _classCallCheck(this, AbstractPresenter);

    this.view = view;
  }

  _createClass(AbstractPresenter, [{
    key: "listener",
    value: function listener() {
      throw new Error("Must be overload!");
    }
  }, {
    key: "switchScreens",
    value: function switchScreens(template, currentHeader) {
      this.main.innerHTML = "";
      if (currentHeader) {
        this.main.appendChild(currentHeader);
      }
      this.main.appendChild(template);
    }
  }, {
    key: "init",
    value: function init() {
      this.listener();
      this.switchScreens(this.view.element);
    }
  }, {
    key: "main",
    get: function get() {
      return document.querySelector(".central");
    }
  }]);

  return AbstractPresenter;
}();

exports.default = AbstractPresenter;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gamePresenter = exports.currentTimer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _data = __webpack_require__(3);

var data = _interopRequireWildcard(_data);

var _StatsPresenter = __webpack_require__(4);

var _HeaderPresenter = __webpack_require__(6);

var _FirstGameView = __webpack_require__(11);

var _SecondGameView = __webpack_require__(12);

var _ThirdGameView = __webpack_require__(13);

var _AbstractPresenter2 = __webpack_require__(1);

var _AbstractPresenter3 = _interopRequireDefault(_AbstractPresenter2);

var _Application = __webpack_require__(5);

var _Application2 = _interopRequireDefault(_Application);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var currentTimer = exports.currentTimer = void 0;

var GamePresenter = function (_AbstractPresenter) {
  _inherits(GamePresenter, _AbstractPresenter);

  function GamePresenter(currentState) {
    _classCallCheck(this, GamePresenter);

    var _this = _possibleConstructorReturn(this, (GamePresenter.__proto__ || Object.getPrototypeOf(GamePresenter)).call(this, ''));

    _this.state = currentState;
    _this.questions = [];
    return _this;
  }

  // функция запуска игры

  _createClass(GamePresenter, [{
    key: 'startGame',
    value: function startGame() {
      var _questions;

      this.questions.length = 0;
      (_questions = this.questions).push.apply(_questions, _toConsumableArray(data.downloadedQuestion));
      this.state = JSON.parse(JSON.stringify(data.initialState));
      this.renderCurrentQuestion();
    }

    // функция отрисовки вопроса

  }, {
    key: 'renderCurrentQuestion',
    value: function renderCurrentQuestion() {
      switch (this.questions[this.state.question].type) {
        case data.GameMode.ONE_IMAGE:
          clearTimeout(currentTimer);
          this.view = new _SecondGameView.SecondGameView();
          this.view.onAnswer = function (target) {
            gamePresenter.checkAnswer(target);
          };
          this.render();
          break;
        case data.GameMode.TWO_IMAGES:
          clearTimeout(currentTimer);
          this.view = new _FirstGameView.FirstGameView();
          this.view.onAnswer = function (target) {
            if (target.querySelector('input[name=question1]:checked') && target.querySelector('input[name=question2]:checked')) {
              gamePresenter.checkAnswer(target);
            }
          };
          this.render();
          break;
        case data.GameMode.THREE_IMAGES:
          clearTimeout(currentTimer);
          this.view = new _ThirdGameView.ThirdGameView();
          this.view.onAnswer = function (target) {
            if (!target.classList.contains('game__content')) {
              gamePresenter.checkAnswer(target);
            }
          };
          this.render();
          break;
      }
    }

    // функция обработки перехода к следующему вопросу

  }, {
    key: 'nextQuestion',
    value: function nextQuestion() {
      this.state.question++;
      if (this.state.question < 10) {
        this.renderCurrentQuestion();
      } else {
        this.youWin();
      }
    }

    // функция проверки правильности ответа

  }, {
    key: 'checkAnswer',
    value: function checkAnswer(target) {
      switch (this.questions[this.state.question].type) {
        case data.GameMode.ONE_IMAGE:
          var modeOneQuestion = document.querySelector('input[name=question1]:checked');
          if (modeOneQuestion.value === this.questions[this.state.question].answers[0].type) {
            this.rightAnswer();
          } else {
            this.wrongAnswer();
          }
          break;
        case data.GameMode.TWO_IMAGES:
          var question1 = document.querySelector('input[name=question1]:checked');
          var question2 = document.querySelector('input[name=question2]:checked');
          if (question1.value === this.questions[this.state.question].answers[0].type && question2.value === this.questions[this.state.question].answers[1].type) {
            this.rightAnswer();
          } else {
            this.wrongAnswer();
          }
          break;
        case data.GameMode.THREE_IMAGES:
          var _document$querySelect = document.querySelectorAll('.game__option'),
              _document$querySelect2 = _toArray(_document$querySelect),
              questionsArr = _document$querySelect2.slice(0);
          // если всего один вопрос с типом `photo`, то нужно выбрать фото среди изображений


          if (this.questions[this.state.question].answers.filter(function (val) {
            return val.type === 'photo';
          }).length === 1) {
            var photo = this.questions[this.state.question].answers.findIndex(function (val) {
              return val.type === 'photo';
            });
            if (target === questionsArr[photo]) {
              this.rightAnswer();
            } else {
              this.wrongAnswer();
            }
          } else {
            // иначе нужно выбрать рисунок среди изображений
            var paint = this.questions[this.state.question].answers.findIndex(function (val) {
              return val.type === 'paint';
            });
            if (target === questionsArr[paint]) {
              this.rightAnswer();
            } else {
              this.wrongAnswer();
            }
          }
          break;
      }
    }

    // функция проверки возможности продолжать игру

  }, {
    key: 'checkLives',
    value: function checkLives() {
      if (this.state.lives > 0) {
        this.nextQuestion();
      } else {
        this.youLose();
      }
    }

    // функция обработки неверного ответа

  }, {
    key: 'wrongAnswer',
    value: function wrongAnswer() {
      this.state.lives--;
      this.state.stats.answers[this.state.question] = data.AnswerStatus.WRONG;
      this.checkLives();
    }

    // функция обработки верного ответа

  }, {
    key: 'rightAnswer',
    value: function rightAnswer() {
      if (this.state.time > 20) {
        this.state.stats.answers[this.state.question] = data.AnswerStatus.FAST;
        this.state.stats.speedBonus.count++;
      } else if (this.state.time <= 20 && this.state.time >= 10) {
        this.state.stats.answers[this.state.question] = data.AnswerStatus.CORRECT;
      } else if (this.state.time < 10) {
        this.state.stats.answers[this.state.question] = data.AnswerStatus.SLOW;
        this.state.stats.slowPenalty.count++;
      }
      this.state.stats.rightAnswers++;
      this.nextQuestion();
    }

    // функция обработки победы

  }, {
    key: 'youWin',
    value: function youWin() {
      this.state.time = '';
      clearTimeout(currentTimer);
      _Application2.default.showPreloader();
      _Application2.default.model.sendStat(_StatsPresenter.statsPresenter.getStateForUpload()).then(function () {
        _Application2.default.showStats();
      });
    }

    // функция обработки поражения

  }, {
    key: 'youLose',
    value: function youLose() {
      this.state.time = '';
      clearTimeout(currentTimer);
      _Application2.default.showPreloader();
      _Application2.default.model.sendStat(_StatsPresenter.statsPresenter.getStateForUpload()).then(function () {
        _Application2.default.showStats();
      });
    }

    // функция таймера

  }, {
    key: 'timer',
    value: function timer() {
      var that = this;
      that.state.time = 30;
      _HeaderPresenter.headerPresenter.refreshHeader();
      exports.currentTimer = currentTimer = setTimeout(function tick() {
        if (that.state.time > 0) {
          that.state.time--;
          _HeaderPresenter.headerPresenter.refreshHeader();
          exports.currentTimer = currentTimer = setTimeout(tick, 1000);
        } else {
          that.wrongAnswer();
        }
      }, 1000);
    }

    // функция подгона размера изображений под размер фрейма

  }, {
    key: 'setPicturesSizes',
    value: function setPicturesSizes() {
      var game = document.querySelector('.game');

      var _game$querySelectorAl = game.querySelectorAll('img'),
          _game$querySelectorAl2 = _toArray(_game$querySelectorAl),
          pictures = _game$querySelectorAl2.slice(0);

      pictures.forEach(function (el) {
        el.style.objectFit = 'contain';
      });
    }

    // функция отрисовки игрового экрана

  }, {
    key: 'render',
    value: function render() {
      this.switchScreens(this.view.element, _HeaderPresenter.headerPresenter.view.element);
      this.setPicturesSizes();
      this.timer();
    }
  }, {
    key: 'init',
    value: function init() {
      this.startGame();
    }
  }]);

  return GamePresenter;
}(_AbstractPresenter3.default);

var gamePresenter = exports.gamePresenter = new GamePresenter(data.currentState);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var NUMBER_OF_QUESTION = exports.NUMBER_OF_QUESTION = 10;
var NUMBER_OF_STATS = exports.NUMBER_OF_STATS = 3;

var paramPoints = exports.paramPoints = ['wrong', 'correct', 'slow', 'fast', 'unknown'];

var Points = exports.Points = Object.freeze({
  CORRECT: 100,
  FAST: 50,
  SLOW: -50,
  LIVES: 50
});

var AnswerStatus = exports.AnswerStatus = Object.freeze({
  WRONG: 'wrong',
  CORRECT: 'correct',
  SLOW: 'slow',
  FAST: 'fast',
  UNKNOWN: 'unknown'
});

var GameMode = exports.GameMode = Object.freeze({
  ONE_IMAGE: 'tinder-like',
  TWO_IMAGES: 'two-of-two',
  THREE_IMAGES: 'one-of-three'
});

// начальное состояние игры.

var initialState = exports.initialState = Object.freeze({
  question: 0,
  time: 30,
  lives: 3,
  stats: {
    answers: new Array(NUMBER_OF_QUESTION).fill(AnswerStatus.UNKNOWN),
    rightAnswers: 0,
    score: 0,
    result: '',
    speedBonus: {
      count: 0,
      points: 0
    },
    livesBonus: {
      count: 0,
      points: 0
    },
    slowPenalty: {
      count: 0,
      points: 0
    },
    totalScore: 0
  }
});

var currentState = exports.currentState = '';

var pictures = exports.pictures = {
  paintings: ['https://k42.kn3.net/CF42609C8.jpg', 'https://k42.kn3.net/D2F0370D6.jpg', 'https://k32.kn3.net/5C7060EC5.jpg'],
  photos: ['http://i.imgur.com/1KegWPz.jpg', 'https://i.imgur.com/DiHM5Zb.jpg', 'http://i.imgur.com/DKR1HtB.jpg']
};

// описание режимов игры

var game = exports.game = [{
  type: GameMode.ONE_IMAGE,
  question: '\u0423\u0433\u0430\u0434\u0430\u0439, \u0444\u043E\u0442\u043E \u0438\u043B\u0438 \u0440\u0438\u0441\u0443\u043D\u043E\u043A?',
  answers: [{
    'image': {
      url: pictures.paintings[1],
      width: 705,
      height: 455
    },
    'type': 'paint'
  }]
}, {
  type: GameMode.TWO_IMAGES,
  question: '\u0423\u0433\u0430\u0434\u0430\u0439\u0442\u0435 \u0434\u043B\u044F \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0444\u043E\u0442\u043E \u0438\u043B\u0438 \u0440\u0438\u0441\u0443\u043D\u043E\u043A?',
  answers: [{
    'image': {
      url: pictures.paintings[2],
      width: 468,
      height: 458
    },
    'type': 'paint'
  }, {
    'image': {
      url: pictures.photos[0],
      width: 468,
      height: 458
    },
    'type': 'photo'
  }]
}, {
  type: GameMode.THREE_IMAGES,
  question: '\u041D\u0430\u0439\u0434\u0438\u0442\u0435 \u0440\u0438\u0441\u0443\u043D\u043E\u043A \u0441\u0440\u0435\u0434\u0438 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439',
  answers: [{
    'image': {
      url: pictures.photos[1],
      width: 304,
      height: 455
    },
    'type': 'photo'
  }, {
    'image': {
      url: pictures.photos[2],
      width: 304,
      height: 455
    },
    'type': 'photo'
  }, {
    'image': {
      url: pictures.paintings[0],
      width: 304,
      height: 455
    },
    'type': 'paint'
  }]
}];

var statUnit = exports.statUnit = {
  stats: [],
  lives: 2
};

// функция генерации массива с вопросами

var questions = exports.questions = function questions() {
  return new Array(NUMBER_OF_QUESTION).fill().map(function () {
    return game[Math.floor(Math.random() * game.length)];
  });
};

var downloadedQuestion = exports.downloadedQuestion = [];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.statsPresenter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _data = __webpack_require__(3);

var data = _interopRequireWildcard(_data);

var _GamePresenter = __webpack_require__(2);

var _HeaderPresenter = __webpack_require__(6);

var _StatsView = __webpack_require__(10);

var _AbstractPresenter2 = __webpack_require__(1);

var _AbstractPresenter3 = _interopRequireDefault(_AbstractPresenter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StatsPresenter = function (_AbstractPresenter) {
  _inherits(StatsPresenter, _AbstractPresenter);

  function StatsPresenter() {
    _classCallCheck(this, StatsPresenter);

    var _this = _possibleConstructorReturn(this, (StatsPresenter.__proto__ || Object.getPrototypeOf(StatsPresenter)).call(this, new _StatsView.StatsView()));

    _this.statistic = [];
    return _this;
  }

  // функция обновления статистики

  _createClass(StatsPresenter, [{
    key: 'refreshStat',
    value: function refreshStat() {
      if (!_GamePresenter.gamePresenter.state.stats) {
        this.statistic.unshift(this.parseFromParamPoints().stats);
        this.statistic.length = 1;
      }
    }

    // функция отрисовки статистики

  }, {
    key: 'renderStat',
    value: function renderStat() {
      this.switchScreens(this.view.element, _HeaderPresenter.headerPresenter.view.element);
      _GamePresenter.gamePresenter.state = JSON.parse(JSON.stringify(data.initialState));
    }

    // функция подсчета очков

  }, {
    key: 'countPoints',
    value: function countPoints(state, lives) {
      var correct = state.score = state.rightAnswers * data.Points.CORRECT; // correct answers
      var fast = state.speedBonus.points = state.speedBonus.count * data.Points.FAST; // fast bonus
      var slow = state.slowPenalty.points = state.slowPenalty.count * data.Points.SLOW; // slow penalty
      state.livesBonus.count = lives;
      var live = state.livesBonus.points = state.livesBonus.count * data.Points.LIVES; // lives bonus
      var totalPoints = state.totalScore = correct + fast + slow + live;
      return totalPoints;
    }

    // функция парсинга статистики из хэша

  }, {
    key: 'parseFromParamPoints',
    value: function parseFromParamPoints() {
      var state = JSON.parse(JSON.stringify(data.initialState));
      var stats = location.hash;
      state.time = '';
      state.lives = +stats.charAt(stats.indexOf('-') + 1); // количество жизней, первый символ после `-` в хэше

      var _stats$slice = stats.slice(stats.indexOf('-') + 2),
          _stats$slice2 = _toArray(_stats$slice),
          answers = _stats$slice2.slice(0);

      answers.forEach(function (val, i) {
        state.stats.answers[i] = data.paramPoints[val];
        switch (+val) {
          case 0:
            break;
          case 1:
            state.stats.rightAnswers++;
            break;
          case 2:
            state.stats.rightAnswers++;
            state.stats.slowPenalty.count++;
            break;
          case 3:
            state.stats.rightAnswers++;
            state.stats.speedBonus.count++;
            break;
          case 4:
            break;
        }
      });
      if (state.stats.rightAnswers < 8) {
        state.stats.result = 'FAIL';
      } else {
        state.stats.result = '\u041F\u043E\u0431\u0435\u0434\u0430';
      }

      this.countPoints(state.stats, state.lives);
      return state;
    }

    // функция парсинга статистики в хэш

  }, {
    key: 'parseToParamPoints',
    value: function parseToParamPoints() {
      var state = this.statistic[0];
      var hashArr = state.answers.map(function (val) {
        return data.paramPoints.findIndex(function (el) {
          return el === val;
        });
      });
      hashArr.unshift(_GamePresenter.gamePresenter.state.lives);
      return 'stat-' + hashArr.join('');
    }
  }, {
    key: 'getStateForUpload',
    value: function getStateForUpload() {
      var answers = _GamePresenter.gamePresenter.state.stats.answers.slice();
      var lives = _GamePresenter.gamePresenter.state.lives;
      return {
        stats: answers,
        lives: lives
      };
    }

    // функция приведения ответа сервера к виду модели

  }, {
    key: 'getStatUnitFromDownload',
    value: function getStatUnitFromDownload(dataUnit) {
      var stat = JSON.parse(JSON.stringify(data.initialState.stats));
      stat.answers = dataUnit.stats;
      stat.livesBonus.count = dataUnit.lives;

      stat.answers.forEach(function (val) {
        switch (val) {
          case data.AnswerStatus.WRONG:
            break;
          case data.AnswerStatus.CORRECT:
            stat.rightAnswers++;
            break;
          case data.AnswerStatus.SLOW:
            stat.rightAnswers++;
            stat.slowPenalty.count++;
            break;
          case data.AnswerStatus.FAST:
            stat.rightAnswers++;
            stat.speedBonus.count++;
            break;
          case data.AnswerStatus.UNKNOWN:
            break;
        }
      });
      if (stat.rightAnswers < 8) {
        stat.result = 'FAIL';
        stat.totalScore = 'FAIL';
      } else {
        stat.result = '\u041F\u043E\u0431\u0435\u0434\u0430';
        this.countPoints(stat, stat.livesBonus.count);
      }

      return stat;
    }
  }, {
    key: 'init',
    value: function init() {
      this.renderStat();
    }
  }]);

  return StatsPresenter;
}(_AbstractPresenter3.default);

var statsPresenter = exports.statsPresenter = new StatsPresenter();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ControllerID = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _RulesPresenter = __webpack_require__(7);

var _GamePresenter = __webpack_require__(2);

var _GreetingsPresenter = __webpack_require__(14);

var _IntroPresenter = __webpack_require__(16);

var _StatsPresenter = __webpack_require__(4);

var _Model2 = __webpack_require__(18);

var _Model3 = _interopRequireDefault(_Model2);

var _data = __webpack_require__(3);

var data = _interopRequireWildcard(_data);

var _PreloaderPresenter = __webpack_require__(20);

var _PreloaderPresenter2 = _interopRequireDefault(_PreloaderPresenter);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ControllerID = exports.ControllerID = {
  INTRO: '',
  GREETINGS: 'greetings',
  RULES: 'rules',
  GAME: 'game',
  STAT: 'stat'
};

var getControllerIDFromHash = function getControllerIDFromHash(hash) {
  return hash.replace('#', '');
};

var Application = function () {
  function Application() {
    var _this2 = this;

    _classCallCheck(this, Application);

    this.main = document.querySelector('.central');
    this.name = '';

    this.model = new (function (_Model) {
      _inherits(_class, _Model);

      function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
      }

      _createClass(_class, [{
        key: 'urlRead',
        get: function get() {
          return 'https://intensive-ecmascript-server-btfgudlkpi.now.sh/pixel-hunter/questions';
        }
      }, {
        key: 'urlWrite',
        get: function get() {
          return this._urlWrite;
        },
        set: function set(url) {
          this._urlWrite = url;
        }
      }]);

      return _class;
    }(_Model3.default))();

    this.model.loadQuestions().then(function (dq) {
      data.downloadedQuestion = dq;
    }).then(function () {
      return _this2.setup();
    }).then(function () {
      return _this2.changeController(getControllerIDFromHash(location.hash));
    }).catch(function (err) {
      return window.console.warn(err);
    });
  }

  _createClass(Application, [{
    key: 'setup',
    value: function setup() {
      var _routes,
          _this3 = this;

      this.routes = (_routes = {}, _defineProperty(_routes, ControllerID.INTRO, _IntroPresenter.introPresenter), _defineProperty(_routes, ControllerID.GREETINGS, _GreetingsPresenter.greetingsPresenter), _defineProperty(_routes, ControllerID.RULES, _RulesPresenter.rulesPresenter), _defineProperty(_routes, ControllerID.GAME, _GamePresenter.gamePresenter), _routes);

      window.onhashchange = function () {
        _this3.changeController(getControllerIDFromHash(location.hash));
      };
    }

    // функция инициализации презентера в зависимости от хэша

  }, {
    key: 'changeController',
    value: function changeController() {
      var route = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      var controller = void 0;
      if (route.slice(0, 4) === 'stat') {
        if (!_GamePresenter.gamePresenter.state.stats) {
          _StatsPresenter.statsPresenter.refreshStat();
        }
        controller = _StatsPresenter.statsPresenter;
        controller.init();
        return;
      }
      controller = this.routes[route];
      controller.init();
    }
  }, {
    key: 'init',
    value: function init() {
      this.changeController(getControllerIDFromHash(location.hash));
    }
  }, {
    key: 'showPreloader',
    value: function showPreloader() {
      _PreloaderPresenter2.default.init();
    }
  }, {
    key: 'showIntro',
    value: function showIntro() {
      location.hash = ControllerID.INTRO;
    }
  }, {
    key: 'showGreetings',
    value: function showGreetings() {
      location.hash = ControllerID.GREETINGS;
    }
  }, {
    key: 'showRules',
    value: function showRules() {
      location.hash = ControllerID.RULES;
    }
  }, {
    key: 'showGame',
    value: function showGame(name) {
      this.name = name;
      this.model.urlWrite = 'https://intensive-ecmascript-server-btfgudlkpi.now.sh/pixel-hunter/stats/' + this.name;
      location.hash = ControllerID.GAME;
    }
  }, {
    key: 'showStats',
    value: function showStats() {
      var _this4 = this;

      this.model.loadStat().then(function (dd) {
        _StatsPresenter.statsPresenter.statistic = dd;
      }).then(function () {
        if (_GamePresenter.gamePresenter.state.stats) {
          ControllerID.STAT = _StatsPresenter.statsPresenter.parseToParamPoints();
          _this4.routes[ControllerID.STAT] = _StatsPresenter.statsPresenter;
          location.hash = ControllerID.STAT;
        } else {
          _StatsPresenter.statsPresenter.refreshStat();
        }
      }).catch(function (err) {
        return window.console.warn(err);
      });
    }
  }]);

  return Application;
}();

var app = new Application();
app.showPreloader();

exports.default = app;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.headerPresenter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _HeaderView = __webpack_require__(9);

var _GamePresenter = __webpack_require__(2);

var _AbstractPresenter2 = __webpack_require__(1);

var _AbstractPresenter3 = _interopRequireDefault(_AbstractPresenter2);

var _Application = __webpack_require__(5);

var _Application2 = _interopRequireDefault(_Application);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeaderPresenter = function (_AbstractPresenter) {
  _inherits(HeaderPresenter, _AbstractPresenter);

  function HeaderPresenter() {
    _classCallCheck(this, HeaderPresenter);

    return _possibleConstructorReturn(this, (HeaderPresenter.__proto__ || Object.getPrototypeOf(HeaderPresenter)).call(this, new _HeaderView.HeaderView()));
  }

  _createClass(HeaderPresenter, [{
    key: 'listener',
    value: function listener() {
      this.view.onBack = function () {
        _GamePresenter.gamePresenter.state = '';
        clearTimeout(_GamePresenter.currentTimer);
        _Application2.default.showGreetings();
      };
    }
  }, {
    key: 'refreshHeader',
    value: function refreshHeader() {
      this.main.replaceChild(this.view.element, this.main.firstChild);
    }
  }]);

  return HeaderPresenter;
}(_AbstractPresenter3.default);

var headerPresenter = exports.headerPresenter = new HeaderPresenter();
headerPresenter.listener();

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rulesPresenter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _RulesView = __webpack_require__(8);

var _AbstractPresenter2 = __webpack_require__(1);

var _AbstractPresenter3 = _interopRequireDefault(_AbstractPresenter2);

var _HeaderPresenter = __webpack_require__(6);

var _Application = __webpack_require__(5);

var _Application2 = _interopRequireDefault(_Application);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RulesPresenter = function (_AbstractPresenter) {
  _inherits(RulesPresenter, _AbstractPresenter);

  function RulesPresenter() {
    _classCallCheck(this, RulesPresenter);

    return _possibleConstructorReturn(this, (RulesPresenter.__proto__ || Object.getPrototypeOf(RulesPresenter)).call(this, new _RulesView.RulesView()));
  }

  _createClass(RulesPresenter, [{
    key: 'listener',
    value: function listener() {
      this.view.onGameStart = function (name) {
        _Application2.default.showGame(name);
      };

      this.view.onInputName = function (input, submit) {
        if (input.value) {
          submit.disabled = false;
        }
      };
    }
  }, {
    key: 'init',
    value: function init() {
      this.listener();
      this.switchScreens(this.view.element, _HeaderPresenter.headerPresenter.view.element);
    }
  }]);

  return RulesPresenter;
}(_AbstractPresenter3.default);

var rulesPresenter = exports.rulesPresenter = new RulesPresenter();

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RulesView = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AbstractView2 = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RulesView = exports.RulesView = function (_AbstractView) {
  _inherits(RulesView, _AbstractView);

  function RulesView() {
    _classCallCheck(this, RulesView);

    return _possibleConstructorReturn(this, (RulesView.__proto__ || Object.getPrototypeOf(RulesView)).apply(this, arguments));
  }

  _createClass(RulesView, [{
    key: 'bind',
    value: function bind() {
      var _this2 = this;

      var go = this._element.querySelector('.rules__form');
      var input = go.querySelector('.rules__input');
      var submit = go.querySelector('.rules__button');
      go.addEventListener('submit', function (evt) {
        evt.preventDefault();
        _this2.onGameStart(input.value);
      });
      input.addEventListener('input', function () {
        _this2.onInputName(input, submit);
      });
    }
  }, {
    key: 'onGameStart',
    value: function onGameStart() {
      //
    }
  }, {
    key: 'onInputName',
    value: function onInputName() {
      //
    }
  }, {
    key: 'template',
    get: function get() {
      return '\n      <div class="rules">\n        <h1 class="rules__title">\u041F\u0440\u0430\u0432\u0438\u043B\u0430</h1>\n        <p class="rules__description">\u0423\u0433\u0430\u0434\u0430\u0439 10 \u0440\u0430\u0437 \u0434\u043B\u044F \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0444\u043E\u0442\u043E <img\n          src="img/photo_icon.png" width="16" height="16"> \u0438\u043B\u0438 \u0440\u0438\u0441\u0443\u043D\u043E\u043A <img\n          src="img/paint_icon.png" width="16" height="16" alt="">.<br>\n          \u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044F\u043C\u0438 \u0438\u043B\u0438 \u0440\u0438\u0441\u0443\u043D\u043A\u0430\u043C\u0438 \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u043E\u0431\u0430 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F.<br>\n          \u041D\u0430 \u043A\u0430\u0436\u0434\u0443\u044E \u043F\u043E\u043F\u044B\u0442\u043A\u0443 \u043E\u0442\u0432\u043E\u0434\u0438\u0442\u0441\u044F 30 \u0441\u0435\u043A\u0443\u043D\u0434.<br>\n          \u041E\u0448\u0438\u0431\u0438\u0442\u044C\u0441\u044F \u043C\u043E\u0436\u043D\u043E \u043D\u0435 \u0431\u043E\u043B\u0435\u0435 3 \u0440\u0430\u0437.<br>\n          <br>\n          \u0413\u043E\u0442\u043E\u0432\u044B?\n        </p>\n        <form class="rules__form">\n          <input class="rules__input" type="text" placeholder="\u0412\u0430\u0448\u0435 \u0418\u043C\u044F">\n          <button class="rules__button  continue" type="submit" disabled>Go!</button>\n        </form>\n      </div>'.trim();
    }
  }]);

  return RulesView;
}(_AbstractView2.AbstractView);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeaderView = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AbstractView2 = __webpack_require__(0);

var _GamePresenter = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeaderView = exports.HeaderView = function (_AbstractView) {
  _inherits(HeaderView, _AbstractView);

  function HeaderView() {
    _classCallCheck(this, HeaderView);

    return _possibleConstructorReturn(this, (HeaderView.__proto__ || Object.getPrototypeOf(HeaderView)).apply(this, arguments));
  }

  _createClass(HeaderView, [{
    key: 'bind',
    value: function bind() {
      var _this2 = this;

      var back = this._element.querySelector('.header__back');
      back.addEventListener('click', function (evt) {
        evt.preventDefault();
        _this2.onBack();
      });
    }
  }, {
    key: 'onBack',
    value: function onBack() {
      //
    }
  }, {
    key: 'template',
    get: function get() {
      var gameHeader = '';
      var getGameHeader = function getGameHeader(state) {
        return ('\n      <h1 class="game__timer">' + state.time + '</h1>\n      <div class="game__lives">\n        ' + new Array(3 - state.lives).fill('<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">').join('') + '\n        ' + new Array(state.lives).fill('<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">').join('') + '\n      </div>').trim();
      };
      if (_GamePresenter.gamePresenter.state) {
        gameHeader = getGameHeader(_GamePresenter.gamePresenter.state);
      }
      return ('\n      <header class="header">\n        <div class="header__back">\n          <button class="back">\n            <img src="img/arrow_left.svg" width="45" height="45" alt="Back">\n            <img src="img/logo_small.svg" width="101" height="44">\n          </button>\n        </div>\n        ' + gameHeader + '\n      </header>').trim();
    }
  }]);

  return HeaderView;
}(_AbstractView2.AbstractView);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatsView = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AbstractView2 = __webpack_require__(0);

var _data = __webpack_require__(3);

var data = _interopRequireWildcard(_data);

var _StatsPresenter = __webpack_require__(4);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StatsView = exports.StatsView = function (_AbstractView) {
  _inherits(StatsView, _AbstractView);

  function StatsView() {
    _classCallCheck(this, StatsView);

    return _possibleConstructorReturn(this, (StatsView.__proto__ || Object.getPrototypeOf(StatsView)).apply(this, arguments));
  }

  _createClass(StatsView, [{
    key: 'gameStats',
    value: function gameStats(currentState) {
      return ('\n      <ul class="stats">\n        ' + new Array(data.NUMBER_OF_QUESTION).fill().map(function (val, i) {
        return '<li class="stats__result stats__result--' + currentState[i] + '"></li>';
      }).join('') + '\n      </ul>').trim();
    }
  }, {
    key: 'template',
    get: function get() {
      var _this2 = this;

      var speedBonus = function speedBonus(i) {
        if (_StatsPresenter.statsPresenter.statistic[i].speedBonus.count > 0) {
          return ('\n            <tr>\n              <td></td>\n              <td class="result__extra">\u0411\u043E\u043D\u0443\u0441 \u0437\u0430 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C:</td>\n              <td class="result__extra">' + _StatsPresenter.statsPresenter.statistic[i].speedBonus.count + '&nbsp;<span class="stats__result stats__result--fast"></span></td>\n              <td class="result__points">\xD7&nbsp;' + data.Points.FAST + '</td>\n              <td class="result__total">' + _StatsPresenter.statsPresenter.statistic[i].speedBonus.points + '</td>\n            </tr>').trim();
        }
        return '';
      };
      var livesBonus = function livesBonus(i) {
        if (_StatsPresenter.statsPresenter.statistic[i].livesBonus.count > 0) {
          return ('\n          <tr>\n            <td></td>\n            <td class="result__extra">\u0411\u043E\u043D\u0443\u0441 \u0437\u0430 \u0436\u0438\u0437\u043D\u0438:</td>\n            <td class="result__extra">' + _StatsPresenter.statsPresenter.statistic[i].livesBonus.count + '&nbsp;<span class="stats__result stats__result--alive"></span></td>\n            <td class="result__points">\xD7&nbsp;' + data.Points.LIVES + '</td>\n            <td class="result__total">' + _StatsPresenter.statsPresenter.statistic[i].livesBonus.points + '</td>\n          </tr>').trim();
        }
        return '';
      };
      var slowPenalty = function slowPenalty(i) {
        if (_StatsPresenter.statsPresenter.statistic[i].slowPenalty.count > 0) {
          return ('\n            <tr>\n              <td></td>\n              <td class="result__extra">\u0428\u0442\u0440\u0430\u0444 \u0437\u0430 \u043C\u0435\u0434\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C:</td>\n              <td class="result__extra">' + _StatsPresenter.statsPresenter.statistic[i].slowPenalty.count + '&nbsp;<span class="stats__result stats__result--slow"></span></td>\n              <td class="result__points">\xD7&nbsp;' + Math.abs(data.Points.SLOW) + '</td>\n              <td class="result__total">' + _StatsPresenter.statsPresenter.statistic[i].slowPenalty.points + '</td>\n            </tr>').trim();
        }
        return '';
      };
      return ('\n      <div class="result">\n        <h1>' + _StatsPresenter.statsPresenter.statistic[0].result + '</h1>\n        ' + _StatsPresenter.statsPresenter.statistic.map(function (val, i) {
        return '<table class="result__table">\n          <tr>\n            <td class="result__number">' + (i + 1) + '.</td>\n            <td colspan="2">\n              ' + _this2.gameStats(_StatsPresenter.statsPresenter.statistic[i].answers) + '\n            </td>\n            <td class="result__points">\xD7&nbsp;' + data.Points.CORRECT + '</td>\n            <td class="result__total">' + _StatsPresenter.statsPresenter.statistic[i].score + '</td>\n          </tr>\n          ' + speedBonus(i) + '\n          ' + livesBonus(i) + '\n          ' + slowPenalty(i) + '\n          <tr>\n            <td colspan="5" class="result__total  result__total--final">' + _StatsPresenter.statsPresenter.statistic[i].totalScore + '</td>\n          </tr>\n        </table>';
      }).join('') + '\n      </div>').trim();
    }
  }]);

  return StatsView;
}(_AbstractView2.AbstractView);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FirstGameView = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AbstractView2 = __webpack_require__(0);

var _data = __webpack_require__(3);

var data = _interopRequireWildcard(_data);

var _GamePresenter = __webpack_require__(2);

var _StatsPresenter = __webpack_require__(4);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FirstGameView = exports.FirstGameView = function (_AbstractView) {
  _inherits(FirstGameView, _AbstractView);

  function FirstGameView() {
    _classCallCheck(this, FirstGameView);

    return _possibleConstructorReturn(this, (FirstGameView.__proto__ || Object.getPrototypeOf(FirstGameView)).apply(this, arguments));
  }

  _createClass(FirstGameView, [{
    key: 'bind',
    value: function bind() {
      var _this2 = this;

      var answers1 = this._element.querySelector('.game__content');
      answers1.addEventListener('change', function (evt) {
        evt.preventDefault();
        _this2.onAnswer(answers1);
      });
    }
  }, {
    key: 'onAnswer',
    value: function onAnswer() {
      //
    }
  }, {
    key: 'template',
    get: function get() {
      return ('\n      <div class="game">\n        <p class="game__task">' + data.downloadedQuestion[_GamePresenter.gamePresenter.state.question].question + '</p>\n        <form class="game__content">\n          <div class="game__option">\n            <img src="' + data.downloadedQuestion[_GamePresenter.gamePresenter.state.question].answers[0].image.url + '" alt="Option 1" width="468" height="458">\n            <label class="game__answer game__answer--photo">\n              <input name="question1" type="radio" value="photo">\n              <span>\u0424\u043E\u0442\u043E</span>\n            </label>\n            <label class="game__answer game__answer--paint">\n              <input name="question1" type="radio" value="paint">\n              <span>\u0420\u0438\u0441\u0443\u043D\u043E\u043A</span>\n            </label>\n          </div>\n          <div class="game__option">\n            <img src="' + data.downloadedQuestion[_GamePresenter.gamePresenter.state.question].answers[1].image.url + '" alt="Option 2" width="468" height="458">\n            <label class="game__answer  game__answer--photo">\n              <input name="question2" type="radio" value="photo">\n              <span>\u0424\u043E\u0442\u043E</span>\n            </label>\n            <label class="game__answer  game__answer--paint">\n              <input name="question2" type="radio" value="paint">\n              <span>\u0420\u0438\u0441\u0443\u043D\u043E\u043A</span>\n            </label>\n          </div>\n        </form>\n        <div class="stats">\n        ' + _StatsPresenter.statsPresenter.view.gameStats(_GamePresenter.gamePresenter.state.stats.answers) + '\n        </div>\n      </div>').trim();
    }
  }]);

  return FirstGameView;
}(_AbstractView2.AbstractView);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SecondGameView = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AbstractView2 = __webpack_require__(0);

var _data = __webpack_require__(3);

var data = _interopRequireWildcard(_data);

var _GamePresenter = __webpack_require__(2);

var _StatsPresenter = __webpack_require__(4);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SecondGameView = exports.SecondGameView = function (_AbstractView) {
  _inherits(SecondGameView, _AbstractView);

  function SecondGameView() {
    _classCallCheck(this, SecondGameView);

    return _possibleConstructorReturn(this, (SecondGameView.__proto__ || Object.getPrototypeOf(SecondGameView)).apply(this, arguments));
  }

  _createClass(SecondGameView, [{
    key: 'bind',
    value: function bind() {
      var _this2 = this;

      var answers2 = this._element.querySelector('.game__content');
      answers2.addEventListener('change', function (evt) {
        evt.preventDefault();
        _this2.onAnswer(evt.target);
      });
    }
  }, {
    key: 'onAnswer',
    value: function onAnswer() {
      //
    }
  }, {
    key: 'template',
    get: function get() {
      return ('\n      <div class="game">\n        <p class="game__task">' + data.downloadedQuestion[_GamePresenter.gamePresenter.state.question].question + '</p>\n        <form class="game__content  game__content--wide">\n          <div class="game__option">\n            <img src="' + data.downloadedQuestion[_GamePresenter.gamePresenter.state.question].answers[0].image.url + '" alt="Option 1" width="705" height="455">\n            <label class="game__answer  game__answer--photo">\n              <input name="question1" type="radio" value="photo">\n              <span>\u0424\u043E\u0442\u043E</span>\n            </label>\n            <label class="game__answer  game__answer--wide  game__answer--paint">\n              <input name="question1" type="radio" value="paint">\n              <span>\u0420\u0438\u0441\u0443\u043D\u043E\u043A</span>\n            </label>\n          </div>\n        </form>\n        <div class="stats">\n        ' + _StatsPresenter.statsPresenter.view.gameStats(_GamePresenter.gamePresenter.state.stats.answers) + '\n        </div>\n      </div>').trim();
    }
  }]);

  return SecondGameView;
}(_AbstractView2.AbstractView);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThirdGameView = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AbstractView2 = __webpack_require__(0);

var _data = __webpack_require__(3);

var data = _interopRequireWildcard(_data);

var _GamePresenter = __webpack_require__(2);

var _StatsPresenter = __webpack_require__(4);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ThirdGameView = exports.ThirdGameView = function (_AbstractView) {
  _inherits(ThirdGameView, _AbstractView);

  function ThirdGameView() {
    _classCallCheck(this, ThirdGameView);

    return _possibleConstructorReturn(this, (ThirdGameView.__proto__ || Object.getPrototypeOf(ThirdGameView)).apply(this, arguments));
  }

  _createClass(ThirdGameView, [{
    key: 'bind',
    value: function bind() {
      var _this2 = this;

      var answers3 = this._element.querySelector('.game__content');
      answers3.addEventListener('click', function (evt) {
        evt.preventDefault();
        _this2.onAnswer(evt.target);
      });
    }
  }, {
    key: 'onAnswer',
    value: function onAnswer() {
      //
    }
  }, {
    key: 'template',
    get: function get() {
      return ('\n      <div class="game">\n        <p class="game__task">' + data.downloadedQuestion[_GamePresenter.gamePresenter.state.question].question + '</p>\n        <form class="game__content  game__content--triple">\n          <div class="game__option">\n            <img src="' + data.downloadedQuestion[_GamePresenter.gamePresenter.state.question].answers[0].image.url + '" alt="Option 1" width="304" height="455">\n          </div>\n          <div class="game__option  game__option--selected">\n            <img src="' + data.downloadedQuestion[_GamePresenter.gamePresenter.state.question].answers[1].image.url + '" alt="Option 1" width="304" height="455">\n          </div>\n          <div class="game__option">\n            <img src="' + data.downloadedQuestion[_GamePresenter.gamePresenter.state.question].answers[2].image.url + '" alt="Option 1" width="304" height="455">\n          </div>\n        </form>\n        <div class="stats">\n        ' + _StatsPresenter.statsPresenter.view.gameStats(_GamePresenter.gamePresenter.state.stats.answers) + '\n        </div>\n      </div>').trim();
    }
  }]);

  return ThirdGameView;
}(_AbstractView2.AbstractView);

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.greetingsPresenter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GreetingsView = __webpack_require__(15);

var _AbstractPresenter2 = __webpack_require__(1);

var _AbstractPresenter3 = _interopRequireDefault(_AbstractPresenter2);

var _Application = __webpack_require__(5);

var _Application2 = _interopRequireDefault(_Application);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GreetingsPresenter = function (_AbstractPresenter) {
  _inherits(GreetingsPresenter, _AbstractPresenter);

  function GreetingsPresenter() {
    _classCallCheck(this, GreetingsPresenter);

    return _possibleConstructorReturn(this, (GreetingsPresenter.__proto__ || Object.getPrototypeOf(GreetingsPresenter)).call(this, new _GreetingsView.GreetingsView()));
  }

  _createClass(GreetingsPresenter, [{
    key: 'listener',
    value: function listener() {
      this.view.onNext = function () {
        _Application2.default.showRules();
      };
    }
  }]);

  return GreetingsPresenter;
}(_AbstractPresenter3.default);

var greetingsPresenter = exports.greetingsPresenter = new GreetingsPresenter();

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GreetingsView = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AbstractView2 = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GreetingsView = exports.GreetingsView = function (_AbstractView) {
  _inherits(GreetingsView, _AbstractView);

  function GreetingsView() {
    _classCallCheck(this, GreetingsView);

    return _possibleConstructorReturn(this, (GreetingsView.__proto__ || Object.getPrototypeOf(GreetingsView)).apply(this, arguments));
  }

  _createClass(GreetingsView, [{
    key: 'bind',
    value: function bind() {
      var _this2 = this;

      var arrow = this._element.querySelector('.greeting__continue');
      arrow.addEventListener('click', function (evt) {
        evt.preventDefault();
        _this2.onNext();
      });
    }
  }, {
    key: 'onNext',
    value: function onNext() {
      //
    }
  }, {
    key: 'template',
    get: function get() {
      return '\n      <div class="greeting central--blur">\n        <div class="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter"></div>\n        <h1 class="greeting__asterisk">*</h1>\n        <div class="greeting__challenge">\n          <h3>\u041B\u0443\u0447\u0448\u0438\u0435 \u0445\u0443\u0434\u043E\u0436\u043D\u0438\u043A\u0438-\u0444\u043E\u0442\u043E\u0440\u0435\u0430\u043B\u0438\u0441\u0442\u044B \u0431\u0440\u043E\u0441\u0430\u044E\u0442&nbsp;\u0442\u0435\u0431\u0435&nbsp;\u0432\u044B\u0437\u043E\u0432!</h3>\n          <p>\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u0438\u0433\u0440\u044B \u043F\u0440\u043E\u0441\u0442\u044B.<br>\n            \u041D\u0443\u0436\u043D\u043E \u043E\u0442\u043B\u0438\u0447\u0438\u0442\u044C \u0440\u0438\u0441\u0443\u043D\u043E\u043A&nbsp;\u043E\u0442 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438 \u0438 \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0432\u044B\u0431\u043E\u0440.<br>\n            \u0417\u0430\u0434\u0430\u0447\u0430 \u043A\u0430\u0436\u0435\u0442\u0441\u044F \u0442\u0440\u0438\u0432\u0438\u0430\u043B\u044C\u043D\u043E\u0439, \u043D\u043E \u043D\u0435 \u0434\u0443\u043C\u0430\u0439, \u0447\u0442\u043E \u0432\u0441\u0435 \u0442\u0430\u043A \u043F\u0440\u043E\u0441\u0442\u043E.<br>\n            \u0424\u043E\u0442\u043E\u0440\u0435\u0430\u043B\u0438\u0437\u043C \u043E\u0431\u043C\u0430\u043D\u0447\u0438\u0432 \u0438 \u043A\u043E\u0432\u0430\u0440\u0435\u043D.<br>\n            \u041F\u043E\u043C\u043D\u0438, \u0433\u043B\u0430\u0432\u043D\u043E\u0435 \u2014 \u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043E\u0447\u0435\u043D\u044C \u0432\u043D\u0438\u043C\u0430\u0442\u0435\u043B\u044C\u043D\u043E.</p>\n        </div>\n        <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>\n      </div>'.trim();
    }
  }]);

  return GreetingsView;
}(_AbstractView2.AbstractView);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.introPresenter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _IntroView = __webpack_require__(17);

var _AbstractPresenter2 = __webpack_require__(1);

var _AbstractPresenter3 = _interopRequireDefault(_AbstractPresenter2);

var _Application = __webpack_require__(5);

var _Application2 = _interopRequireDefault(_Application);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IntroPresenter = function (_AbstractPresenter) {
  _inherits(IntroPresenter, _AbstractPresenter);

  function IntroPresenter() {
    _classCallCheck(this, IntroPresenter);

    return _possibleConstructorReturn(this, (IntroPresenter.__proto__ || Object.getPrototypeOf(IntroPresenter)).call(this, new _IntroView.IntroView()));
  }

  _createClass(IntroPresenter, [{
    key: 'listener',
    value: function listener() {
      this.view.onNext = function () {
        _Application2.default.showGreetings();
      };
    }
  }]);

  return IntroPresenter;
}(_AbstractPresenter3.default);

var introPresenter = exports.introPresenter = new IntroPresenter();

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IntroView = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AbstractView2 = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IntroView = exports.IntroView = function (_AbstractView) {
  _inherits(IntroView, _AbstractView);

  function IntroView() {
    _classCallCheck(this, IntroView);

    return _possibleConstructorReturn(this, (IntroView.__proto__ || Object.getPrototypeOf(IntroView)).apply(this, arguments));
  }

  _createClass(IntroView, [{
    key: 'bind',
    value: function bind() {
      var _this2 = this;

      var asterisk = this._element.querySelector('.intro__asterisk');
      asterisk.addEventListener('click', function (evt) {
        evt.preventDefault();
        _this2.onNext();
      });
    }
  }, {
    key: 'onNext',
    value: function onNext() {
      //
    }
  }, {
    key: 'template',
    get: function get() {
      return '\n      <div id="main" class="central__content">\n        <div id="intro" class="intro">\n          <h1 class="intro__asterisk">*</h1>\n          <p class="intro__motto"><sup>*</sup> \u042D\u0442\u043E \u043D\u0435 \u0444\u043E\u0442\u043E. \u042D\u0442\u043E \u0440\u0438\u0441\u0443\u043D\u043E\u043A \u043C\u0430\u0441\u043B\u043E\u043C \u043D\u0438\u0434\u0435\u0440\u043B\u0430\u043D\u0434\u0441\u043A\u043E\u0433\u043E \u0445\u0443\u0434\u043E\u0436\u043D\u0438\u043A\u0430-\u0444\u043E\u0442\u043E\u0440\u0435\u0430\u043B\u0438\u0441\u0442\u0430 Tjalf Sparnaay.</p>\n        </div>\n      </div>'.trim();
    }
  }]);

  return IntroView;
}(_AbstractView2.AbstractView);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Adapter = __webpack_require__(19);

var _Adapter2 = _interopRequireDefault(_Adapter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Model = function () {
  function Model() {
    _classCallCheck(this, Model);
  }

  _createClass(Model, [{
    key: 'loadQuestions',
    value: function loadQuestions() {
      var adapt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _Adapter2.default;

      return fetch(this.urlRead).then(function (resp) {
        if (resp.status === 200) {
          return resp.json();
        }
        throw new Error('Server responded with error');
      }).then(adapt.preprocess).catch(function (err) {
        return window.console.warn(err);
      });
    }
  }, {
    key: 'loadStat',
    value: function loadStat() {
      var adapt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _Adapter2.default;

      return fetch(this.urlWrite).then(function (response) {
        if (response.status === 200) {
          return response.json();
        }
        throw new Error('Server responded with error');
      }).then(adapt.preprocessStat).catch(function (err) {
        return window.console.warn(err);
      });
    }
  }, {
    key: 'sendStat',
    value: function sendStat(data) {
      var adapt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _Adapter2.default;

      var requestSettings = {
        body: adapt.toServer(data),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      };

      return fetch(this.urlWrite, requestSettings);
    }
  }, {
    key: 'urlRead',
    get: function get() {
      throw new Error('Must be overload');
    }
  }, {
    key: 'urlWrite',
    get: function get() {
      throw new Error('Must be overload');
    }
  }]);

  return Model;
}();

exports.default = Model;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Adapter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _StatsPresenter = __webpack_require__(4);

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Adapter = exports.Adapter = function () {
  function Adapter() {
    _classCallCheck(this, Adapter);
  }

  _createClass(Adapter, [{
    key: 'preprocess',


    // приведение списка вопросов с сервера к модели

    value: function preprocess(data) {
      var _data = _toArray(data),
          game = _data.slice(0);

      game.forEach(function (el) {
        el.answers.forEach(function (val) {
          if (val.type === 'painting') {
            val.type = 'paint';
          }
        });
      });
      return game;
    }

    // приведение статистики с сервера к модели

  }, {
    key: 'preprocessStat',
    value: function preprocessStat(data) {
      return data.map(function (val) {
        return _StatsPresenter.statsPresenter.getStatUnitFromDownload(val);
      });
    }

    // обработка статистики для отправки на сервер

  }, {
    key: 'toServer',
    value: function toServer(data) {
      return JSON.stringify(data);
    }
  }]);

  return Adapter;
}();

var adapter = new Adapter();
exports.default = adapter;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AbstractPresenter2 = __webpack_require__(1);

var _AbstractPresenter3 = _interopRequireDefault(_AbstractPresenter2);

var _PreloaderView = __webpack_require__(21);

var _PreloaderView2 = _interopRequireDefault(_PreloaderView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PreloaderPresenter = function (_AbstractPresenter) {
  _inherits(PreloaderPresenter, _AbstractPresenter);

  function PreloaderPresenter() {
    _classCallCheck(this, PreloaderPresenter);

    return _possibleConstructorReturn(this, (PreloaderPresenter.__proto__ || Object.getPrototypeOf(PreloaderPresenter)).call(this, new _PreloaderView2.default()));
  }

  _createClass(PreloaderPresenter, [{
    key: "listener",
    value: function listener() {
      //
    }
  }]);

  return PreloaderPresenter;
}(_AbstractPresenter3.default);

var preloaderPresenter = new PreloaderPresenter();
exports.default = preloaderPresenter;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AbstractView2 = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PreloaderView = function (_AbstractView) {
  _inherits(PreloaderView, _AbstractView);

  function PreloaderView() {
    _classCallCheck(this, PreloaderView);

    return _possibleConstructorReturn(this, (PreloaderView.__proto__ || Object.getPrototypeOf(PreloaderView)).apply(this, arguments));
  }

  _createClass(PreloaderView, [{
    key: "template",
    get: function get() {
      return "\n      <div class=\"container\">\n        <div class=\"item-1\"></div>\n        <div class=\"item-2\"></div>\n        <div class=\"item-3\"></div>\n        <div class=\"item-4\"></div>\n        <div class=\"item-5\"></div>\n      </div>".trim();
    }
  }]);

  return PreloaderView;
}(_AbstractView2.AbstractView);

exports.default = PreloaderView;

/***/ })
/******/ ]);