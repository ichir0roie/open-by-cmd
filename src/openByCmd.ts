import { exec } from 'child_process';

import * as vscode from 'vscode';

export default function openByCmd(args: vscode.Uri) {
    exec(args.fsPath);
}