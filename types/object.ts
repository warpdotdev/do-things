export enum ObjectType {
  Prompt = 'Prompt',
  Workflow = 'Workflow',
  Notebook = 'Notebook',
  Folder = 'Folder'
}

/**
 * Represents an object/prompt in the system
 * Organized into logical sections matching the YAML structure
 */
export interface ObjectData {
  // Basic Information

  /** Title of the object */
  title: string;

  /** Description of the object */
  description: string;

  /** Type of object (Prompt, Workflow, Notebook, or Folder) */
  type: ObjectType;

  /** URL to the object's external resource */
  link: string;

  /** GitHub username of the author */
  author: string;

  /** Date when the object was added */
  dateAdded: string;

  /** Array of tags for categorization */
  tags: string[];
}

export type SortOrder = 'newest' | 'oldest' | null;
