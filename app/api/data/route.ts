import { ObjectData, ObjectType } from '@/types/object';
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

/**
 * Interface matching the YAML structure in the objects directory
 */
interface YamlObject {
  title: string;
  description: string;
  type: 'prompt' | 'workflow' | 'notebook' | 'folder';
  link: string;
  author: string;
  date_added: string;
  tags: string[];
  show: boolean;
}

export function GET() {
  try {
    const objectsDir = path.join(process.cwd(), 'public', 'objects');
    const files = fs.readdirSync(objectsDir);
    
    const objects: ObjectData[] = files
      .filter(file => file.endsWith('.yaml'))
      .map(file => {
        const filePath = path.join(objectsDir, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        const data = yaml.load(content) as YamlObject;
        
        // Validate required fields
        if (!data.title || !data.description || !data.type || !data.link || !data.author || !data.date_added) {
          throw new Error(`Missing required fields in ${file}`);
        }
        
        // Validate type is one of the allowed values
        if (!['prompt', 'workflow', 'notebook', 'folder'].includes(data.type)) {
          throw new Error(`Invalid type "${data.type}" in ${file}. Must be one of: prompt, workflow, notebook, folder`);
        }
        
        return {
          title: data.title,
          description: data.description,
          type: data.type.charAt(0).toUpperCase() + data.type.slice(1) as ObjectType, // e.g convert from "workflow" to "Workflow," for copy purposes
          link: data.link,
          tags: data.tags || [],
          date_added: data.date_added,
          author: data.author,
          show: data.show ?? true // Default to true if not specified
        };
      })
      .filter(object => object.show); // Filter out objects where show is false

    return NextResponse.json(objects);
  } catch (error) {
    console.error('Error reading data:', error);
    return NextResponse.json(
      { 
        error: 'Failed to load data',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
