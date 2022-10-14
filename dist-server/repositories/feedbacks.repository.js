"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.feedbacksRepository = void 0;
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var FeedbacksRepository = /*#__PURE__*/function () {
  function FeedbacksRepository() {
    _classCallCheck(this, FeedbacksRepository);
  }
  _createClass(FeedbacksRepository, [{
    key: "findAll",
    value: function findAll() {
      return this.feedbacks;
    }
  }, {
    key: "findOne",
    value: function findOne(id) {
      return this.feedbacks.find(function (feedback) {
        return feedback.id === id;
      }) || null;
    }
  }, {
    key: "save",
    value: function save(feedback) {
      var index = this.feedbacks.findIndex(function (_ref) {
        var id = _ref.id;
        return feedback.id === id;
      });
      if (index !== -1) {
        this.feedbacks[index] = feedback;
      }
      this.notes.push(feedback);
    }
  }]);
  return FeedbacksRepository;
}();
var feedbacksRepository = new NotesRepository();
exports.feedbacksRepository = feedbacksRepository;