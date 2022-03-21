import { userRepository } from "../repository";

type SortType = {};
type UpdatedUserInfo = {};

export const userPageUseCase = () => {
  /** ユーザー情報の取得 */
  const getUserInfo = async (userId: string) => {
    const user = await userRepository().find(userId);
    /** View に合わせたデータ構造に変換する */

    const viewUser = "";
    return viewUser;
  };

  /** ユーザー情報の並び替え */
  const sortUserInfo = async (sortType: SortType) => {
    /** ユーザー情報を並び替えて返す */

    const sortedUserInfo = "";
    return sortedUserInfo;
  };

  /** ユーザー情報の更新 */
  const updateUserInfo = async (updatedUserInfo: UpdatedUserInfo) => {
    /** Store を更新 */
    const dispatchToStore = (_updatedUserInfo: UpdatedUserInfo) => {};
    dispatchToStore(updatedUserInfo);

    /** リポジトリに渡す。リポジトリ層には依存しないため変換なしでそのまま渡せる */
    const result = await userRepository().write(updatedUserInfo);

    return result;
  };

  return { getUserInfo, sortUserInfo, updateUserInfo };
};
