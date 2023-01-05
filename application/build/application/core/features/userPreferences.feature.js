"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPreferences = void 0;
class UserPreferences {
    constructor(user, userRepository) {
        this.user = user;
        this.userRepository = userRepository;
    }
    getUserPreferences() {
        return this.userRepository.providePreferencesByUserId(this.user.id);
    }
    setUserPreferences(userPreferences) {
        this.userRepository.setUserPreferences(userPreferences, this.user.id);
    }
}
exports.UserPreferences = UserPreferences;
exports.default = UserPreferences;
