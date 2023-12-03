export interface ProjectProps {
    name: string;
    description: string;
    language?: string;
    license?: { name: string; } | null;
    html_url: string;
}