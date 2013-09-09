<?php
	class genericArray {
		
		public function __construct(){
			return Request::current()->post();
		}
		
		/* Para substituir o foreach */
		public function foreachArray($post){
			if(!isset($post)){
				$post = self::__construct();
			}
			
			/* Serialize */
			$array['key'] 		= array_keys($post);
			$array['value'] 	= array_values($post);
			
			return $array;
		}
		
		/* Procura um valor de array e retorna sua Key ou Value */
		public function searchArray($search, $array){
			return array_search($search, $array, true);
		}
		
		/* Para vizualizar arrays */
		public function dumpArray($post)
		{
			if(!isset($post)){
				$post = self::__construct();
			}
			$post['count'] = count($post);
			return var_dump($post);
		}
	}
?>