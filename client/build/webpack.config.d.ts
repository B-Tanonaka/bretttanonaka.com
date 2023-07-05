import HtmlWebpackPlugin = require("html-webpack-plugin");
export let mode: string;
export let entry: string;
export namespace output {
    let path: string;
    let filename: string;
}
export let cache: boolean;
export let devtool: string;
export namespace module {
    let rules: {
        test: RegExp;
        loader: string;
        exclude: RegExp;
    }[];
}
export namespace resolve {
    let extensions: string[];
}
export let plugins: HtmlWebpackPlugin[];
