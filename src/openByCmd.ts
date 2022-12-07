import { exec } from 'child_process';

import * as vscode from 'vscode';

export default function openByCmd(args: vscode.Uri) {
    var filePath: string = args.fsPath;
    filePath = `\"${filePath}\"`;
    exec(filePath);
}