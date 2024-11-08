class ValidateMessage {
  static MIN_WINNING_NUMBER = 1;

  static MAX_WINNING_NUMBER = 45;

  static INPUT_ERROR_MESSAGES = {
    NATURAL_NUMBER: (subject) => `[ERROR] ${subject} 자연수로 입력해주세요.\n`,
    OUT_OF_RANGE: (subject) =>
      `[ERROR] ${subject} ${ValidateMessage.MIN_WINNING_NUMBER}부터 ${ValidateMessage.MAX_WINNING_NUMBER}사이의 값을 입력해주세요.\n`,
    MIN_PRICE: "[ERROR] 구입금액은 최소 1000원부터 입력해주세요.\n",
    PRICE_UNIT: "[ERROR] 구입금액은 1,000원 단위로 입력해주세요.\n",
    WINNING_NUMBER_COUNT: "[ERROR] 당첨 번호는 쉼표(,)로 구분하여 6개 입력해주세요.\n",
    DUPLICATE_NUMBER: "[ERROR] 번호들 중 중복된 값이 존재합니다. 서로 다른 값들로만 다시 입력하세요.\n",
    BONUS_NUMBER_DUPLICATE: "[ERROR] 당첨 번호들 중 보너스 번호와 중복된 값이 존재합니다. 다시 입력하세요.\n",
  };

  static LOTTO_ERROR_MESSAGES = {
    INVALID_NUMBER_COUNT: "[ERROR] 로또 번호는 6개여야 합니다.",
    DUPLICATE_VALUES: "[ERROR] 로또 번호중 중복된 값이 존재합니다.\n",
    NOT_AN_INTEGER: "[ERROR] 로또 번호는 자연수여야 합니다.",
    OUT_OF_RANGE: "[ERROR] 로또 번호는 1과 45사이의 값이어야 합니다.",
  };
}

export default ValidateMessage;
