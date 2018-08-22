export declare type MathRenderingOption = "None" | "KaTeX" | "MathJax";
export interface MarkdownEngineConfig {
    usePandocParser?: boolean;
    breakOnSingleNewLine?: boolean;
    enableTypographer?: boolean;
    enableWikiLinkSyntax?: boolean;
    wikiLinkFileExtension?: string;
    enableEmojiSyntax?: boolean;
    enableExtendedTableSyntax?: boolean;
    enableCriticMarkupSyntax?: boolean;
    protocolsWhiteList?: string;
    mathRenderingOption?: MathRenderingOption;
    mathInlineDelimiters?: string[][];
    mathBlockDelimiters?: string[][];
    codeBlockTheme?: string;
    previewTheme?: string;
    revealjsTheme?: string;
    mermaidTheme?: string;
    frontMatterRenderingOption?: string;
    imageFolderPath?: string;
    printBackground?: boolean;
    phantomPath?: string;
    pandocPath?: string;
    pandocMarkdownFlavor?: string;
    pandocArguments?: string[];
    latexEngine?: string;
    enableScriptExecution?: boolean;
}
export declare const defaultMarkdownEngineConfig: MarkdownEngineConfig;
