// save data
// user-action -> presentation -> use-case -> repository -> infra -> save data

// fetch data
// presentation -> use-case -> repository -> infra -> get data
// -> infra ->  repository -> use-case -> presentation -> show data

// tasks
// - call infra to save / get data
// - format data for infra / use-case

// Merit
// - separation of concern
// - who do what?
// - where to change?
// - specify the change area
// - clear responsibility
// - module code, easy to change
// - organized code

type User = {};

export const userRepository = () => {
  /** ユーザー情報の取得 */
  const find = async (userId: string) => {
    /** 1. ユーザー情報を DB から取得するための処理 */
    /** 2. ユースケースに合わせたデータ構造に変換する */
    const user = "";
    return user;
  };

  /** ユーザー情報の書き込み */
  const write = async (user: User) => {
    /** 1. DB に合わせたデータ構造に変換する */
    /** 2. ユーザー情報を DB に書き込むための処理 */
    const result = "";
    return result;
  };

  /** ユーザー情報の削除 */
  const deleteUser = async (userId: string) => {
    /** ユーザー情報を DB から削除するための処理 */
    const result = "";
    return result;
  };

  return { find, write, deleteUser };
};
