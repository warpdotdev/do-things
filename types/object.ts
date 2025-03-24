export type ObjectType = 'Prompt' | 'Workflow' | 'Notebook' | 'Folder';

/**
 * Represents an object/prompt in the system
 * Organized into logical sections matching the YAML structure
 */
export interface ObjectData {
  // Basic Information
  title: string;           // Title of the object
  description: string;     // Description of the object
  type: ObjectType;       // Type of object (Prompt, Workflow, Notebook, or Folder)
  link: string;           // URL to the object's external resource
  author: string;         // GitHub username of the author
  date_added: string;     // Date when the object was added
  tags: string[];         // Array of tags for categorization
  show: boolean;          // Whether to show the object in the UI
}

export type SortOrder = 'newest' | 'oldest' | null;
