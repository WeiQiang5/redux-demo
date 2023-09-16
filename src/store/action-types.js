/**
 * 统一管理dispatch分发的type标识
 * 为了保证不冲突，我们一般都是这样命名的
 * + 模块名_派发的行为标识「大写」
 * + 所有需要派发的行为标识，都在这里定义
 * */

// vote
export const VOTE_SUP = "VOTE_SUP";
export const VOTE_OPP = "VOTE_OPP";
// personal
export const PERSONAL_SUP = "PERSONAL_SUP";
export const PERSONAL_INFO = "PERSONAL_INFO";
