"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// modules importation
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const passport_1 = __importDefault(require("passport"));
const passport_2 = __importDefault(require("./middlewares/passport"));
const path_1 = __importDefault(require("path"));
const app = express_1.default();
const auth_1 = __importDefault(require("./routes/auth"));
const file_1 = __importDefault(require("./routes/file"));
const player_1 = __importDefault(require("./routes/player"));
const country_1 = __importDefault(require("./routes/country"));
const team_1 = __importDefault(require("./routes/team"));
const competition_1 = __importDefault(require("./routes/competition"));
const match_1 = __importDefault(require("./routes/match"));
const coach_1 = __importDefault(require("./routes/coach"));
// middlewares
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(passport_1.default.initialize());
passport_1.default.use(passport_2.default);
// routes
app.use(auth_1.default);
app.use(file_1.default, express_1.default.static(path_1.default.resolve('uploads')));
app.use(player_1.default);
app.use(country_1.default);
app.use(team_1.default);
app.use(competition_1.default);
app.use(match_1.default);
app.use(coach_1.default);
// settings
app.set('port', process.env.PORT || 3000);
exports.default = app;
